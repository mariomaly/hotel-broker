const router = require('express').Router();

router.get('/',loginUser);

  
function loginUser(req, res, next)
{
    // var user = req.body;
    //
    // //var result  = con.query("SELECT * FROM Users WHERE username = "+user.username+" AND  password = "user.password""))
    // //if(!result)
    // res.status(404).send();
    // res.render("browse_hotels")
}


module.exports = function(app){
    app.use("/login", router);
};