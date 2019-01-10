var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var todoSchema= new Schema({

    user : String,
    todo : String,
    isDone: Boolean,
    hasAttachement: Boolean,
    created_at : { type : Date, default: Date.now },
    updated_at: {type : Date}


});



  todoSchema.pre('findByIdAndUpdate', function(done) {
    this.updated_at = Date.now();
    done();
  });


var Todo = mongoose.model('Todos',todoSchema);
module.exports = Todo;