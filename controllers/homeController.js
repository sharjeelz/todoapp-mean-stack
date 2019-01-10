var Todo= require('../models/todoModel');
var express = require('express');
var router= express.Router();

    // get all todos
    router.get('/',function(req, res, next){
        Todo.find({},{},{sort: {'_id': -1}},function(err,results){
           if(err) throw err;
           res.render('index',{data:results});
        });
    });

    module.exports= router;