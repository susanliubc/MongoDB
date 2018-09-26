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

//drop the driver collection before every test
beforeEach(function(done) {
    //drop the collection
    mongoose.connection.collections.drivers.drop(function() {
        done();
    });
});
