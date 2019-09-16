const db = require("../db");

module.exports = {
    home: (req, res) => {
        var allDiary = db.load("select * from posts");

        allDiary.then(data => {
            console.log(data.rows);
            var posts = data.rows;
            for (const post of posts) {
                post.date = new Date(`${post.writingdate}`).toLocaleDateString(
                    "vi-VI",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric"
                    },
                    { timeZone: "Asia/Saigon" }
                  );
            }
            res.render("index", {
                title: posts[0].title,
                posts
            });
        })
    }
}