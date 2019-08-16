const request = require('request');

request('http://localhost:8080/data?_start=4&_end=9', (err, resp, body) => {

    if (err) {
        console.error('request failed');
        console.error(err);
    } else {
        console.log(body);
    }
});