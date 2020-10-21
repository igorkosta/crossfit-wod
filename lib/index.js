#!/usr/bin/env node

'use strict'

const Cheerio = require('cheerio')
const fetch = require('node-fetch')
const uri = 'https://crossfit.com'

const startDate = new Date('2001-02-10')
const today = new Date()

const randomDate = () => {
  return new Date(+startDate + Math.random() * (today - startDate))
}

const formattedDate = (date = randomDate()) => {
  return date.toISOString().split('T')[0].split('-').join('/')
}

const randomWodUri = (baseUri = uri) => {
  return baseUri + '/workout/' + formattedDate()
}

const randomWod = async (type = 'json') => {

  let wod = {}
  const wodURI = randomWodUri()
  try {
    const response = await fetch(wodURI)
    const html = await response.text()

    const $ = Cheerio.load(html)
    const wodContainer = $('#wodContainer').children('.wod')

    if (!wodContainer.length) {
      randomWod()
    }

    if (type === 'json') {
      wod.title = wodContainer.children('h1').text()
      wod.href = wodURI
      wod.excercises = wodContainer.children('div.box').find('p').text()
      wod.picture_url = $('#photoContainer').find('img.img-responsive').attr('src')
      wod.next = uri + wodContainer.find('a.next').attr('href')
      wod.previous = uri + wodContainer.find('a.prev').attr('href')
      console.log(wod)
    } else {
      wod = wodContainer.children('div.white-box').find('.content').html()
      console.log(wod)
    }
    return wod
  } catch (error) {
    return error
  }
}

randomWod('html')

module.exports = {
  randomWod
}
