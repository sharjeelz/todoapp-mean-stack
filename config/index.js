var configurationvalue= require('./config');
var mongoose = require('mongoose');

module.exports= {


    DbUrl: function()
    {

       return  `mongodb://${configurationvalue.username}:${configurationvalue.password}@ds151614.mlab.com:51614/users`;
    },

    LocalDbUrl: function()
    {

        return 'mongodb://localhost:27017/todos';
    },
    Connecttodb: function()
    {
        mongoose.connect(this.LocalDbUrl(),{ useNewUrlParser: true } );
    }

};