//author Charles
// Sat 24 Aug 2019 18:01:07 EDT

function getBusiness(keyword, locate)
{
  const apiKey = '';
  const yelp = require('yelp-fusion');
  const client = yelp.client(apiKey);

  return new Promise(function(resolve, reject){
    client.search({term: keyword, location: locate, limit: 5})
    .then(function (data) {
      resolve( [data.jsonBody.businesses[0].name, data.jsonBody.businesses[0].alias, data.jsonBody.businesses[0].location.address1, data.jsonBody.businesses[0].rating] );
    })
    .catch(function (err) {
      resolve(["None","None","None","None" ]);
    });
  })
}

function getReview(k)
{
  const apiKey = '';
  const yelp = require('yelp-fusion');
  const client = yelp.client(apiKey);

  return new Promise(function(resolve, reject){
    client.reviews(k).then(
      function (data) {
        resolve(data.jsonBody.reviews[0].text);
      }).catch(e => {
      console.log(e);
    });
  })
}

async function yelp(keywords, locate)
{
  let key = await getBusiness(keywords, locate);
  let review = await getReview(key[1]);
  let res = "";
  key[0]=="None"? res="No result":res = "The best matched place is: " + key[0] + " at " + key[2] + "\nRate: " + key[3] + "\n\""+review+"\"";
  return new Promise(function(resolve, reject){
    resolve(res);
  });
}

// async function demo (){
//   let res;
//   try { res = await getYelp("Ivan's asshole Rest.", "Toronto"); console.log(res);}
//   catch(e) { console.log(e); }
// }

// demo();

module.exports = yelp;