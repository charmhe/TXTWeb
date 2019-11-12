const request = require("request");

const appid = "";

function weather (city, country, callback) {
    request("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid="+appid, function(error, response, body) {
        let data = JSON.parse(body);
        let result = "";
        for (let i = 0; i < data.list.length; i++) {
            result = result + data.list[i].dt_txt + " " + ((data.list[i].main.temp + (-32)) * (5/9)).toFixed(2) +
                    " " +data.list[i].weather[0].description + "\n";
            i+=3;
        }
        callback(result);
    });
};

module.exports = weather;