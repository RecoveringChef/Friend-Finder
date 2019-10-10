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
        var totalFriendScores =[];
        for (var i = 0; i< friends.length; i++){

            var arrayScore = friends[i].scores;
            var diff = 0;
            
            for (var j = 0; j < arrayScore.length; j++) { 
                diff += Math.abs(arrayScore[j] - score[j])  
            }
             totalFriendScores.push(diff)
            }
             var minNum = Math.min(...totalFriendScores)

             console.log(minNum);

             var matchIndex = totalFriendScores.indexOf(minNum);

             var bestMatch = friends[matchIndex];
             
           
            
            // if (diff < bestFriendScore) {
            //     bestFriendScore = diff;
            //     bestFriendImage = friends[all].photo;
            //     bestFriendName = friends[all].name;
            //     bestFriend = friends[all]
            //     arrayScore = 0
            //     all++
            // } else {
            //     diff= 0
            //     all++
            // }
            
       
       
       
        user.scores = score;
            res.json(bestMatch);
        friends.push(user);
    });
}

