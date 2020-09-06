require("dotenv").config();

const config = {
    ApiKey: process.env.API_KEY,
}

module.exports = { config: config }