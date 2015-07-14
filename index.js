var url = require('url')

/**
 * Remove characters that are valid in URIs, but S3 does not like them for
 * some reason.
 * @param  {String} str String to encode
 * @return {String}     Encoded string
 * @api prviate
 */
function encodeSpecialCharacters (str) {
  return encodeURI(str).replace(/[!'()* ]/g, function (char) {
    return '%' + char.charCodeAt(0).toString(16)
  })
}

/**
 * Return an https url from given `bucket`, `key`, and `bucketLocation`
 * @param  {String} bucket         S3 bucket name
 * @param  {String} key            S3 file key
 * @param  {String} bucketLocation S3 bucket location.
 * @return {String}                Returns the url as a string
 * @api public
 */
module.exports.getHttps = function getHttps (bucket, key, bucketLocation) {
  var nonStandardBucketLocation = (bucketLocation && bucketLocation !== 'us-east-1')
  var hostnamePrefix = nonStandardBucketLocation ? ('s3-' + bucketLocation) : 's3'
  var parts = {
    protocol: 'https:',
    hostname: hostnamePrefix + '.amazonaws.com',
    pathname: '/' + bucket + '/' + encodeSpecialCharacters(key)
  }
  return url.format(parts)
}

/**
 * Return an https url from given `bucket` and `key`
 * @param  {String} bucket         S3 bucket name
 * @param  {String} key            S3 file key
 * @return {String}                Returns the url as a string
 * @api public
 */
module.exports.getHttp = function getHttp (bucket, key) {
  var parts = {
    protocol: 'http:',
    hostname: bucket + '.s3.amazonaws.com',
    pathname: '/' + encodeSpecialCharacters(key)
  }
  return url.format(parts)
}
