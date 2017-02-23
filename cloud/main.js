
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

var api_key = 'key-55926f4a678c42180a02d8e58e7e7e82';
var domain = 'pixnary.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

Parse.Cloud.define('sendMail', function(req, res) {
  var data = {
    from: 'Forum User <me@pixnary.com>',
    to: req.params.to,
    subject: req.params.subject,
    text: req.params.text
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });

  res.success('Email Sent!');
});