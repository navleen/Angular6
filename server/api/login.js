module.exports = function (serverInfo,console) {
  var port = 6600;


  var Utility = require("./Utility")(serverInfo)
  

  return {
    login:function(req,res)        {
      res.json({
        "status": "success",
        "data":"abc"
      });
    },

    logout: function(req,res)        {
      req.user.auth_token = null;
      req.user.save(function(err,user){
        if (err){
          res.send(500, {'message': err});
        }
        res.json({ message: 'See you!'});
      });
    }
  }
};



