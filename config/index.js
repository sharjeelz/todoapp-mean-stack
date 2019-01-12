var configurationvalue= require('./config');
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var mysql=require('mysql');
//process.env['ENVI']='dev';
var connection=mysql.createConnection({

    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    port: process.env.RDS_PORT,
    password: process.env.RDS_PASSWORD,
    database : 'ebdb'
});

var localconnection=mysql.createConnection({

    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database : 'ebdb'
});

module.exports= {


    DbUrl: function()
    {

       return  `mongodb://${configurationvalue.username}:${configurationvalue.password}@ds151614.mlab.com:51614/users`;
    },

    LocalDbUrl: function()
    {

        return 'mongodb://localhost:27017/todos';
    },
    ConnecttoMongodb: function()
    {
        mongoose.connect(this.LocalDbUrl(),{ useNewUrlParser: true } );
    },
    ConnecttoMysqldb: function()
    {


        if( process.env.ENVI=="prod"){

            return  connection;

        }
        else if(process.env.ENVI=="dev") {
            return  localconnection;
        }



    }


};