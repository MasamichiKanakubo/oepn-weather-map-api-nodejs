const request = require("request");
const dotenv = require('dotenv');

dotenv.config();

const options = {
    uri: `https://api.openweathermap.org/data/2.5/weather?q=${process.argv[2]}&units=metric&appid=${process.env.API_KEY}`,
    method: "GET",
    json: true
};

request(options, (error, response, body) => {
    console.log(`現在の${process.argv[2]}の温度は${body.main.temp}℃です。`);
});