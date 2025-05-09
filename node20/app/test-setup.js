const path = require('path');
const kebabCase = require('lodash/kebabCase');

global.config = {
  // Change the port number to what your application uses for local development!
  baseUrl: process.env.TEST_BASE_URL
};

global.utils = {
  loadPage: async (urlPath) => {
    // page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    const httpResponse = await page.goto(`${global.config.baseUrl}/${urlPath}`, {waitUntil: ['domcontentloaded', 'networkidle0']});
    await new Promise(r => setTimeout(r, 150));
    return httpResponse;
  }
};

// jest-image-snapshot setup
// extend `expect` with `toMatchImageSnapshot` and set global configuration options
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: {
    // pixelmatch options: https://github.com/mapbox/pixelmatch#api
    threshold: 0.1
  },
  failureThreshold: 0.001,
  failureThresholdType: 'percent',
  customSnapshotsDir: process.env.TEST_ROOT_DIR + '/tests/image-snapshots',
  customDiffDir: process.env.TEST_ROOT_DIR + '/tests/image-snapshots/diff',
  customSnapshotIdentifier: ({testPath, currentTestName, counter, defaultIdentifier}) => {return kebabCase(`${path.basename(testPath)}-${currentTestName}`);},
});
expect.extend({ toMatchImageSnapshot });
