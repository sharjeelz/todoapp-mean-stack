//var Todo= require('../models/todoModel');
var express = require('express');
var router= express.Router();
var config = require('../config');
var localconnection=config.ConnecttoMysqldb();

localconnection.connect(function(err){

  if (err)  throw err;//process.env['msg']='Unable to connect to db'+ err;
});


router.get('/',function(req, res, next){
    localconnection.query('select * from todos',function(err,results,fields){
        if (err) throw err;
        else{

            res.render('index',{data:results});
    }
    });

});



    module.exports= router;