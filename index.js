#!/usr/bin/env node

const cheerio = require('cheerio');
const request = require('request');
const moment = require('moment');
const uri = 'https://crossfit.com/workout/'

const startDate = new Date('2001-02-10');
const today = new Date();

function randomDate() {
  var date = new Date(+startDate + Math.random() * (today - startDate));
  return moment(date).format("YYYY/MM/DD");
};

rd = randomDate();
var wod = {}

var getWod = function(value) {

  request(uri+rd, function(error, response, html) {
    if (error) return console.error(error)

    var $ = cheerio.load(html)

    var wodContainer = $('#wodContainer').children('.wod')

    if (!wodContainer.length) {

      rd = randomDate()
      return getWod(rd)

    } else {

      wod.title = wodContainer.children('h1').text();
      wod.href = uri+rd;
      wod.excercises = wodContainer.children('div.box').find('p').text();
      wod.picture_url = $('#photoContainer').find('img.img-responsive').attr('src');
      console.log(wod);

    }
  });
};
getWod(rd);
