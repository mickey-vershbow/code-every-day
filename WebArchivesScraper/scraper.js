// Install the Node ScrapingBee library
// npm install scrapingbee
const scrapingbee = require("scrapingbee");

async function get(url) {
  var client = new scrapingbee.ScrapingBeeClient(
    "UW9T435JS1IMHFAHACIF8UXMTRFV5SA5RNVD95RCE2ZZF71LVNDPXBZSPCSBV24B3FUX1P83QWV4AOCG"
  );
  var response = await client.get({
    url: url,
    params: {},
  });
  return response;
}

get("http://httpbin.scrapingbee.com/anything?json")
  .then(function (response) {
    var decoder = new TextDecoder();
    var text = decoder.decode(response.data);
    console.log(text);
  })
  .catch((e) => console.log("A problem occurs : " + e.response.data));
