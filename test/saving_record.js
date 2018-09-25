//saving data to mongodb
const assert = require('assert');
const Driver = require('../models/driver');

//Describe tests
describe('Saving records', function() {

    //create tests
    it('Save a record to the database',  function(done) {
        let driver = new Driver({
            'name': 'Tom',
            'gender': 'Male',
            'destination': 'Vancouver',
            'available': true,
            'geometry': {type: 'Point', 'coordinates':[-80, 25.79]}
        });
        driver.save().then(function() {
            assert(!driver.isNew);
            done();
        });
    });
});