const assert = require('assert');
const Driver = require('../models/driver');

//Describe tests
describe('Deleting records', function() {
    let driver;

    beforeEach(function(done) {
        driver = new Driver({
            'name': 'Eva',
            'gender': 'Female',
            'destination': 'Richmond',
            'available': 'true',
            'geometry': {type:'Point', coordinates:[-70.8, 30.45]}
        });

        driver.save().then(function(){
            assert(!driver.isNew);
            done();
        });
    });

    //create tests
    it('Delete one receord from database', function(done){
        Driver.findOneAndRemove({'name':'Eva'}).then(function(){
            Driver.findOne({'name':'Eva'}).then(function(result){
                assert(result === null);
                done();
            });
        });
    });
}); 