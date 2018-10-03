var app = require('./helpers/app');
var should = require('should'),
    supertest = require('supertest');

describe('flights',function(){
    it('it should return valid fligh data for flight18', function(done){
        supertest(app).get('/flight/18').expect(200).end(function(err,res){
            res.status.should.equal(200);
            done();
        });
    })
    it('should return an error for invalid flight', function(done){
        supertest(app).get('/flight/5655').expect(404).end(function(err,res){
            res.status.should.equal(404);
            done();
        })
    })
})