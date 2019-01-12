var Todo= require('../models/todoModel');
var express = require('express');
var router= express.Router();

//upload image

router.post('/api/todo/pic',function(req, res){


    res.send(req.body);

});


    //get todo by user
    router.get('/api/todos/:user',function(req, res)
    {
        Todo.find({user:req.params.user},function(err,result){
            if (err) throw err;
            res.send(result);
        });
    });

    // get todo by id
    router.get('/api/todo/:id',function(req, res){
        Todo.findById({_id:req.params.id},function(err,result){
            if (err) throw err;
            res.send(result);
        });
    });

    // add or update todo
    router.post('/api/todo',function(req, res){

        if(req.body.id){ // if its update
            Todo.findByIdAndUpdate(req.body.id,{
            user:req.body.user,
            todo : req.body.todo,
            isDone: req.body.isDone,
            hasAttachement: req.body.hasAttachement,
            },function(err){
                if(err) throw err;
                res.send('Updated');
            });
        }
        else{ // new todo

            var  newTodo= Todo({
            user:req.body.user,
            todo : req.body.todo,
            isDone: req.body.isDone,
            hasAttachement: req.body.hasAttachement,
        });
        newTodo.save(function(err,data){

            if (err) throw err;
            res.send(data);
        });
    }
});
    // delete todo
    router.delete('/api/todo/:id',function(req, res){
        Todo.findByIdAndDelete(req.params.id,function(err){
            if (err) throw err;
            res.send('Deleted');
        });
    });

    router.post('/api/todo/done',function(req,res){

            Todo.findOneAndUpdate({_id:req.body.id},{isDone:req.body.isDone},function(err,result){
            if(err) console.log( err);
            res.send(result);

        });

    });


module.exports= router;