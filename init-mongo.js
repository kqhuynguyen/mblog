db.createUser(
    {
        user: "huynkq",
        pwd: "123456",
        roles: [
            {
                role: "readWrite",
                db: "myblgs"
            }
        ]
    }
);
db.createCollection("test");