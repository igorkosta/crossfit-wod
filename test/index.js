'use strict'

const Sinon = require('sinon')
const Request = require('request')
const Code = require('code') // assertion library
const Lab = require('lab')
const Wod = require('../lib/index')
const Fixtures = require('./fixtures')
const lab = exports.lab = Lab.script()

const describe = lab.describe
const afterEach = lab.afterEach
const it = lab.it
const expect = Code.expect

describe('formattedDate()', () => {

  it('should format a random date', (done) => {
    expect(Wod.formattedDate(('2016-10-08T19:11:26.976Z'))).to.equal('2016/10/08')
    done()
  })

})


describe('randomDate()', () => {

  it('should return a random date between start date and today', (done) => {
    expect(Wod.randomDate()).to.be.a.date()
    expect(Wod.randomDate()).to.be.a.within(new Date('2001-02-10'), new Date())
    done()
  })
})

describe('randomWod()', () => {
  it('should return a console.log with a random wod', (done) => {

    // should cover line 61
    done()
  })

})

describe('Unsuccessful request', () => {

  afterEach( (done) => {

    Request.get.restore()
    done()
  })

  it('should search for a successful url and log it to the console', (done) => {

    const error = new Error('connect ETIMEDOUT')
    Sinon.stub(Request, 'get').yields(error, { statusCode: 500 }, [])

    Wod.randomWod( (result) => {

      expect(result).to.equal(error)
    })

    done()
  })

  it('should search for a successful url and log it to the console', (done) => {

    const html = Fixtures.wod
    const expected = { title: 'Sunday 160508',
      href: 'https://crossfit.com/workout/2016/05/08',
      excercises: 'Deadlift 5-5-3-3-3-1-1-1-1 repsPost loads to comments.',
      picture_url: undefined,
      next: 'https://crossfit.com/workout/2016/05/09',
      previous: 'https://crossfit.com/workout/2016/05/07' }
    Sinon
      .stub(Request, 'get')
      .yields(null, { statusCode: 200 }, html)
    Wod.randomWod( (result) => {

      expect(result).to.equal(expected)
    })
    done()
  })

})
