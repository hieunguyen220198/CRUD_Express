var express = require("express");
var router = express.Router();

/*router.get("/", function(req, res){
    //res.json({"message": "This is admin page"});
    res.render("admin/dashboard", {data: {error:false}});
});*/

router.get("/post/new", function(req, res){
    res.render("post/new", {data: {error:false}});
})

module.exports = router;