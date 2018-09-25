const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

//connect to mongodb before test run
before(function(done) {
    //connect to mongodb
    mongoose.connect('mongodb://localhost/driver', {useNewUrlParser: true});

    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error) {
        console.log('Connection error: ', error);
    });
});
/*
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db" 
*/