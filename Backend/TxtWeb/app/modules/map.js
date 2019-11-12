const request = require("request");

const key_test = "";

function map(ori, des, trans, callback){
	// search part

    let origin = ori.split(' ').join('+');
    let destination = des.split(' ').join('+');


	var theUrl = "https://maps.googleapis.com/maps/api/directions/json?language=en"
	theUrl+="&origin=";
	theUrl+=origin;
	theUrl+="&destination=";
	theUrl+=destination;
	theUrl+="&key=";
	theUrl+=key_test;
	theUrl+="&mode=";
    theUrl+=trans;

	let ret = "";

	request(theUrl, function(error, response, body){
		let result = JSON.parse(body);
		let durationTime = result.routes[0].legs[0].duration.text;
		let passpoint = result.routes[0].summary;
		ret = "The best route is by " +passpoint+ ", taking "+durationTime+".\n";

		for (i = 0; i < result.routes[0].legs[0].steps.length; i++) {
			ret = ret + (i+1) + ". " + result.routes[0].legs[0].steps[i].html_instructions.replace(/\<[^\>]*\>/g,"") + ", " + result.routes[0].legs[0].steps[i].distance.text + ", " + result.routes[0].legs[0].steps[i].duration.text + ".\n";
		}
		callback(ret);
	})
}

// calculate the meaning of a word
function def(x)
{
	var theUrl="https://googledictionaryapi.eu-gb.mybluemix.net/?lang=en&define="
	theUrl+=x;

	request(theUrl, function(error, response, body){
		let result = JSON.parse(body);
		console.log(result.status);
		return result.status;
	})
}

module.exports = map;