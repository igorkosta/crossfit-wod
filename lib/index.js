#!/usr/bin/env node

'use strict';

const Cheerio = require('cheerio');
const Request = require('request');
const Moment = require('moment');
const uri = 'https://crossfit.com';

const startDate = new Date('2001-02-10');
const today = new Date();

const randomDate = function randomDate() {

    return new Date(+startDate + Math.random() * (today - startDate));
};

const formattedDate = function formattedDate(date = randomDate()) {

    return Moment(date).format('YYYY/MM/DD');
};

const randomWodUri = (baseUri = uri) => {

    return baseUri + '/workout/' + formattedDate();
};

const randomWod = (cb) => {

    const wod = {};

    Request.get(randomWodUri(), (error, response, html) => {

        if (error) {
            return error;
        }

        const $ = Cheerio.load(html);

        const wodContainer = $('#wodContainer').children('.wod');

        if (!wodContainer.length) {

            randomWod();
        }
        else {

            wod.title = wodContainer.children('h1').text();
            wod.href = uri + wodContainer.find('a.comments').attr('href').split('#')[0];
            wod.excercises = wodContainer.children('div.box').find('p').text();
            wod.picture_url = $('#photoContainer').find('img.img-responsive').attr('src');
            wod.next = uri + wodContainer.find('a.next').attr('href');
            wod.previous = uri + wodContainer.find('a.prev').attr('href');
            return cb(wod);
        }
    });
};

randomWod( (result) => {

    return console.log(result);
});

module.exports = {
    randomDate,
    formattedDate,
    randomWodUri,
    randomWod
};
