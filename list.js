'use strict'

const universities = require('./data/universities.json')

exports.getUniversities = function getData () {
  return universities
}
