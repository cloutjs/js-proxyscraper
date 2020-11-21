const request = require("request");
const fs = require("fs");
request.get({
    uri: 'https://api.proxyscrape.com/?request=getproxies&proxytype=socks4&timeout=10000',
}, function (err, resp, body) {
  fs.writeFile('proxies.txt', body, function(err) {
});
});