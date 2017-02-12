/**
 * Created by Abraham on 07/02/2017.
 */

var User = require("../../app/modules/user");
var conf = require("../../config");
var key = conf.secretkey;

module.exports = function(app, express){
    "use strict";

    var api = express.Router();
    
    api.post('/signup', function(req, res) {
        var user = new User({
            name:req.body.name,
            username:req.body.username,
            password:req.body.password
        });

        user.save(function (err) {
            if(err){
                res.send(err);
                return;
            }
            res.json({message : "User created successfully"});
        });

    });

    return api;
};