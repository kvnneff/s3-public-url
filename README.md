# s3-public-url

Create a string representing a public S3 file url.

This code is lifted from [node-s3-client](https://github.com/andrewrk/node-s3-client)

## API

### s3.getHttps(bucket, key, [bucketLocation])

* bucket S3 bucket
* key S3 key
* bucketLocation string, one of these:
  * "" (default) - US Standard
  * "eu-west-1"
  * "us-west-1"
  * "us-west-2"
  * "ap-southeast-1"
  * "ap-southeast-2"
  * "ap-northeast-1"
  * "sa-east-1"

You can find out your bucket location programatically by using this API: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getBucketLocation-property

returns a string which looks like this:

`https://s3.amazonaws.com/bucket/key`

or maybe this if you are not in US Standard:

`https://s3-eu-west-1.amazonaws.com/bucket/key`

### s3.getHttp(bucket, key)

* `bucket` S3 Bucket
* `key` S3 Key

Works for any region, and returns a string which looks like this:

  `http://bucket.s3.amazonaws.com/key`



## License

MIT