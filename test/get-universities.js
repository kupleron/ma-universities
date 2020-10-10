'use strict'

const { test } = require('tap')
const { getUniversities } = require('../')
const universities = require('../data/universities.json')

test('get all universities names', function (t) {
  t.equal(getUniversities().length, universities.length, 'universities list should be the same length as data/universities.json')
  t.type(getUniversities(), Array, 'universities list is an array')
  t.type(getUniversities()[0], Object, 'first item in list should be object')
  t.end()
})
