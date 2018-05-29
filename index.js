let request = require('request');

const wwoApiKey = '031e9ff47c244c51be165319182505';
let city_name = 'portland';
let url = "http://api.apixu.com/v1/current.json?key=031e9ff47c244c51be165319182505&q=" + city_name; 

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
   // let weather = JSON.parse(body)
   // let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(body);
  }
});