const request = require("request");

function wiki (topic, callback) {
    let urlTopic = topic.split(' ').join('_');
    request("https://en.wikipedia.org/api/rest_v1/page/summary/"+urlTopic, function (error, response, body) {
        callback(JSON.parse(body).extract);
    });
};

module.exports = wiki;