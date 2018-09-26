const assert = require('assert');
const Driver = require('../models/driver');

//Describe tests
describe('Updating records', function() {
    let driver;

    beforeEach(function(done) {
        driver = new Driver({
            'name': 'Minny',
            'gender': 'Female',
            'destination': 'Surrey',
            'available': 'true',
            'geometry': {type:'Point', coordinates:[-70.34, 30.23]}
        });
        driver.save().then(function(){
            done();
        });
    });

    //create test
    it('Updating one record in database', function(done) {
        Driver.findOneAndUpdate({'name':'Minny'}, {'name':'Viccy'}).then(function(){
            Driver.findOne({_id:driver._id}).then(function(result){
                assert(result.name === 'Viccy');
                done();
            });
        });
    });
}); 