databases = ['admin', 'config', 'local',]

for (var i = databases.length - 1; i >= 0; i--) {
    db = db.getSiblingDB(databases[i])

    db.createUser({
        user: "root",
        pwd: "password",
        roles: ["readWrite"]
    })
}