const assert = require('assert');
const Driver = require('../models/driver');

//Describe test
describe('Insert many record', function() {
    let driver;

    beforeEach(function(done) {
        driver = [
            {'name': 'Tom',
            'gender': 'Male',
            'destination': 'Vancouver',
            'available': true,
            'geometry': {type: 'Point', 'coordinates':[-80, 25.79]}
            },
            {'name': 'Jerry',
            'gender': 'Male',
            'destination': 'Burnaby',
            'available': 'false',
            'geometry': {type: 'Point', coordinates:[-60, 50.83]}
            },
            {'name': 'Eva',
            'gender': 'Female',
            'destination': 'Richmond',
            'available': 'true',
            'geometry': {type:'Point', coordinates:[-70.8, 40.6]}
            },
            {'name': 'Minny',
            'gender': 'Female',
            'destination': 'Surrey',
            'available': 'true',
            'geometry': {type:'Point', coordinates:[-70.34, 30.23]}
            },
            {'name': 'Fox',
            'gender': 'Male',
            'destination': 'Coquitlam',
            'available': 'true',
            'geometry': {type:'Point', coordinates:[-50, 35.4]}
            }
        ];

        Driver.collection.insertMany(driver).then(function(){
            assert(!driver.isNew);
            done();
        });
    });
    //create test
    it('Inserting many records to database', function(done) {
        Driver.find({}).then(function(result) {
            assert(!result.isNew);
            done();
        });
    });
});