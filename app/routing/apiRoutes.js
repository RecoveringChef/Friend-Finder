var friends = require("../data/friends.js")


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
       // console.log(friends)
        res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var user = req.body
        var score = []
        for (var i = 0; i < user.scores.length; i++) {
            var userScore = parseInt(user.scores[i])
            score.push(userScore)
        }
        console.log(user);
        console.log(score);

     //do math to compare
        var friendIndex = 0;
        var bestFriendName;
        var bestFriendImage;
        var bestFriend;
        var bestFriendScore = 50;

        function compare(all) {
            var arrayScore = friends[all].scores;
            var diff = 0;

            for (var i = 0; i < arrayScore.length; i++) { 
                diff += Math.abs(arrayScore[i] - score[i])  
            }
            if (diff < bestFriendScore) {
                bestFriendScore = diff;
                bestFriendImage = friends[all].photo;
                bestFriendName = friends[all].name;
                bestFriend = friends[all]
                arrayScore = 0
                all++
            } else {
                diff= 0
                all++
            }
            compare(all)
        }
        compare(friendIndex);
        res.json(friend);
        user.scores = score;
        friends.push(user);
    });
}

