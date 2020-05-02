import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import ARTICLES_QUERY from "../../apollo/queries/article/articles";
import { Subscription } from "rxjs";

@Component({
  selector: "app-articles",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit, AfterViewInit {
  data: any = {};
  loading = true;
  errors: any;
  leftMapCount: any;
  leftMap: any[];
  rightMap: any[];
  fruits: any[];
  private queryMap: Subscription;
  representativesUser: { name: string, title: string, picture?: string }[];
  councillorsUser: { name: string, title: string, picture?: string }[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.queryMap = this.apollo
      .watchQuery({
        query: ARTICLES_QUERY
      })
      .valueChanges.subscribe(result => {
        this.data = result.data;
        this.leftMapCount = Math.ceil(this.data.articles.length / 5);
        this.leftMap = this.data.articles.slice(0, this.leftMapCount);
        this.rightMap = this.data.articles.slice(
          this.leftMapCount,
          this.data.articles.length
        );
        this.loading = result.loading;
        this.errors = result.errors;
      });

    const base_dummy_path = 'https://www.jimin.jp/member/img/'
    this.representativesUser = [
      { name: '山田　美樹', title: '党 NPO・NGO関係団体委員長', picture: base_dummy_path + 'yamada-mi.jpg' },
      { name: '辻　　清人', title: '自民党外交部会長代理', picture: base_dummy_path + 'tsuji-ki.jpg' },
      { name: '萩生田光一', title: '文部科学大臣', picture: base_dummy_path + 'hagiuda-kou.jpg' },
      { name: '平　　将明', title: '内閣府副大臣', picture: base_dummy_path + 'taira-ma.jpg' },
    ];
    this.councillorsUser = [
      { name: '朝日　健太郎', title: '国土交通委員会', picture: base_dummy_path + 'asahi-kentarou.jpg' },
      { name: '中川　雅治', title: '法務委員会', picture: base_dummy_path + 'nakagawa-ma.jpg' },
      {
        name: '丸川　珠代', title: '元オリンピック・パラリンピック担当大臣元テレビ朝日アナウンサー',
        picture: base_dummy_path + 'marukawa-ta.jpg'
      },
      { name: '武見　敬三', title: '元厚生労働副大臣元外務政務次官', picture: base_dummy_path + 'takemi-ke.jpg' },
    ];
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.queryMap.unsubscribe();
  }
}