#!/usr/bin/env node

'use strict';

const Cheerio = require('cheerio');
const Request = require('request');
const Moment = require('moment');
const uri = 'https://crossfit.com/workout/';

const startDate = new Date('2001-02-10');
const today = new Date();

const randomDate = function randomDate() {

    return new Date(+startDate + Math.random() * (today - startDate));
};

const formattedDate = function formattedDate(date) {

    return Moment(date).format('YYYY/MM/DD');
};

const wod = {};

const randomWod = function (date) {

    Request(uri + formattedDate(randomDate()), (error, response, html) => {

        if (error) {
            return console.error(error);
        }

        const $ = Cheerio.load(html);

        const wodContainer = $('#wodContainer').children('.wod');

        if (!wodContainer.length) {

            const date = formattedDate(randomDate());
            randomWod(date);

        }
        else {

            wod.title = wodContainer.children('h1').text();
            wod.href = uri + formattedDate(randomDate());
            wod.excercises = wodContainer.children('div.box').find('p').text();
            wod.picture_url = $('#photoContainer').find('img.img-responsive').attr('src');
            console.log(wod);

        }
    });
};

randomWod(formattedDate(randomDate()));

module.exports = {
    randomDate,
    formattedDate,
    randomWod
};
