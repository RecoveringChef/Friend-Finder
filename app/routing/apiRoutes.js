var friends = require("../data/friends.js")


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        console.log(friends)
        res.json(friends)
    });
    
    app.post("/api/friends", function(req, res){
         var user = req.body
         var score = []
         for (var i = 0; i <user.scores.length; i++){
         var userScore = parseInt(user.scores[i]) 
         score.push(userScore)     
         } 
    console.log(user);
    console.log(score);
    user.scores = score;
    friends.push(user);
    //do math to compare
    res.json(friends)
    });
    


//take result as variable pass to survey
}

