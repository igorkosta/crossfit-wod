const $ = require('cheerio');
const request = require('request');
const uri = 'https://crossfit.com/workout/'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

request(uri, function (error, response, html) {
  if (error) return console.error(error)

  var parsedHTML = $.load(html)
  var wods = []
  
  parsedHTML('#archives div.content').each(function(i, element) {
    var wod = {}
    var a = $(this).find('h3 a').first();
    wod.title = $(a).text();
    wod.href = $(a).attr('href');
    var excercises = $(this).find('div.row p').first().text()
    wod.excercises = excercises
    wods.push(wod);
  })

var one = getRandomInt(1, wods.length);
console.log(wods[one]);

});
