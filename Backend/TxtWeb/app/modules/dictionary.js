const request = require("request");

// calculate the meaning of a word
function dictionary(word, callback)
{
	var theUrl="https://googledictionaryapi.eu-gb.mybluemix.net/?lang=en&define="
	theUrl+=word;

	request(theUrl, function(error, response, body){
		let data = JSON.parse(body);
        let result = "";
        Object.keys(data[0].meaning).forEach(function (key) {
            result = result + key + ": " + data[0].meaning[key][0].definition + "\n";
        });
		callback(result);
	})
}

module.exports = dictionary;