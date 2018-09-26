const assert = require('assert');
const Driver = require('../models/driver');

//Describe tests
describe('Finding records', function() {
    let driver;
    beforeEach(function(done) {
        driver = new Driver({
            'name': 'Jerry',
            'gender': 'Male',
            'destination': 'Burnaby',
            'available': 'false',
            'geometry': {type: 'Point', coordinates:[-60, 50.83]}
        });
        driver.save().then(function(){
            done();
        });
    });

    //create test
    it('Find one record by ID from database', function(done) {
        Driver.findOne({_id:driver._id}).then(function(result) {
            assert(result._id.toString() === driver._id.toString());
            done();
        });
    });

    it('Find one record from database', function(done) {
        Driver.findOne({'destination': 'Burnaby'}).then(function(result) {
            assert(result.destination === 'Burnaby');
            done();
        });
    });
}); 