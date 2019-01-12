var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var todoSchema= new Schema({

    user : String,
    todo : String,
    isDone: Boolean,
    hasAttachement: Boolean,
    created_at : { type : Date, default: Date.now }


});





var Todo = mongoose.model('Todos',todoSchema);
module.exports = Todo;