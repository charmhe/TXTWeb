const sms = require("express").Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const map = require("../modules/map");
const yelp = require("../modules/yelp");
const wiki = require("../modules/wiki");
const news = require("../modules/news");
const weather = require("../modules/weather");
const dictionary = require("../modules/dictionary");

function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
};

sms.post("/receive", function(request, response) {

    let input = request.body.Body
    let type = input.substring(0, getPosition(input, ",", 1)).trim().toLowerCase();
    if (type == "map") {
        let origin = input.substring(getPosition(input, ",", 1)+1, getPosition(input, ",", 2)).trim();
        let destination = input.substring(getPosition(input, ",", 2)+1, getPosition(input, ",", 3)).trim();
        let transport = input.substring(getPosition(input, ",", 3)+1, input.length).trim().toLowerCase();
        map(origin, destination, transport, function (result) {
            const twiml = new MessagingResponse();
            twiml.message(result);
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.end(twiml.toString());
        });
    } else if (type == "yelp") {
        let keywords = input.substring(getPosition(input, ",", 1)+1, getPosition(input, ",", 2)).trim();
        let location = input.substring(getPosition(input, ",", 2)+1, input.length).trim().toLowerCase();
        (async function () {
            let result = await yelp(keywords, location);
            const twiml = new MessagingResponse();
            twiml.message(result);
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.end(twiml.toString());
        })();
    } else if (type == "wiki") {
        let topic = input.substring(getPosition(input, ",", 1)+1, input.length).trim();
        wiki(topic, function (result) {
            const twiml = new MessagingResponse();
            twiml.message(result);
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.end(twiml.toString());
        });
    } else if (type == "weather") {
        let city = input.substring(getPosition(input, ",", 1)+1, getPosition(input, ",", 2)).trim();
        let country = input.substring(getPosition(input, ",", 2)+1, input.length).trim();
        weather(city, country, function (result) {
            const twiml = new MessagingResponse();
            twiml.message(result);
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.end(twiml.toString());
        });
    } else if (type == "news") {
        let keyword = input.substring(getPosition(input, ",", 1)+1, getPosition(input, ",", 2)).trim();
        let category = input.substring(getPosition(input, ",", 2)+1, getPosition(input, ",", 3)).trim();
        let country = input.substring(getPosition(input, ",", 3)+1, input.length).trim();
        news("top-headlines", keyword, category, country, function (result) {
            const twiml = new MessagingResponse();
            twiml.message(result);
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.end(twiml.toString());
        });
    } else if (type == "dictionary") {
        let word = input.substring(getPosition(input, ",", 1)+1, input.length).trim();
        dictionary(word, function (result) {
            const twiml = new MessagingResponse();
            twiml.message(result);
            response.writeHead(200, {'Content-Type': 'text/xml'});
            response.end(twiml.toString());
        });
    }

});

module.exports = sms;