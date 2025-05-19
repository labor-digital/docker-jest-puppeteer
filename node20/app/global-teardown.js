const jestPuppeteerTeardown = require('jest-environment-puppeteer/teardown');
const fs = require("node:fs");

module.exports = async function (globalConfig, projectConfig) {
    await jestPuppeteerTeardown(globalConfig, projectConfig);

    // const testResultsJson = JSON.parse(fs.readFileSync(process.env.TEST_ROOT_DIR + '/tests/test-reports/jest-ctrf.json').toString());
    // console.log(testResultsJson.results);
};