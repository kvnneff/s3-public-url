var s3 = require('../')
var test = require('tape')
var assert = require('assert')

test('gets public URL', function(assert) {
  assert.plan(3)
  var httpsUrl = s3.getHttps('mybucket', 'path/to/key')
  assert.equal(httpsUrl, 'https://s3.amazonaws.com/mybucket/path/to/key')
  var httpUrl = s3.getHttp('mybucket', 'path/to/key')
  assert.equal(httpUrl, 'http://mybucket.s3.amazonaws.com/path/to/key')
  // treat slashes literally
  httpsUrl = s3.getHttps('marina-restaurant.at', 'uploads/about_restaurant_10.jpg', 'eu-west-1')
  assert.equal(httpsUrl, 'https://s3-eu-west-1.amazonaws.com/marina-restaurant.at/uploads/about_restaurant_10.jpg')
})
