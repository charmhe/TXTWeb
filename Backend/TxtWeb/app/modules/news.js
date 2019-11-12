const request = require("request");

const apikey = "";

function news (type, keyword, category, country, callback) {
    let query = "";
    if (keyword != "") query = query + "q=" + keyword + "&";
    if (category != "") query = query + "category=" + category + "&";
    if (country != "") query = query + "country=" + country + "&";
    request("https://newsapi.org/v2/"+type+"?"+query+"pageSize=5&apiKey="+apikey, function (error, response, body) {
        let number = 5;

        let data = JSON.parse(body);
        let result = "";
        if (data.articles.length < 3) number = data.articles.length;
        for (let i = 0; i < number; i++) {
            result = result + data.articles[i].title + "\n" + data.articles[i].description + "\n\n";
        };
        callback(result);
    });
};

module.exports = news;