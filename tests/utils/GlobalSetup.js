const { fullConfig } = require("@playwright/test");
const dotenv = require("dotenv").config({ path: `config/env/.env.${process.env.test_env}`, override: true });


async function GlobalSetup(fullConfig) {
    console.log("Test environment running: ", process.env.test_env);

};
module.exports = GlobalSetup;