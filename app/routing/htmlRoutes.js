var path = require("path");

module.exports = function(app){

    app.get("/", function(req, res){
        res.sendfile(path.join(__dirname, "../public/home.html"))        
    })
    
    app.get("/survey", function(req, res){
        res.sendfile(path.join(__dirname, "../public/survey.html"))
    });
    
    app.get("*", function(req, res){
        res.sendfile(path.join(__dirname, "../public/home.html"))        
    })

}