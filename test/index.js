'use strict';

const Wod = require('../lib/index');
const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('formattedDate()', () => {

    it('should format a random date', (done) => {

        expect(Wod.formattedDate(('2016-10-08T19:11:26.976Z'))).to.equal('2016/10/08');
        done();
    });

});


describe('randomDate()', () => {

    it('should return a random date between start date and today', (done) => {

        expect(Wod.randomDate()).to.be.a.date();
        expect(Wod.randomDate()).to.be.a.within(new Date('2001-02-10'), new Date());
        done();
    });

});

describe('Unsuccessful request', () => {

    it('should search for a successful url and log it to the console', (done) => {

        done();
    });

});
