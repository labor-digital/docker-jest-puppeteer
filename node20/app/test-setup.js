global.config = {
  // Change the port number to what your application uses for local development!
  baseUrl: process.env.TEST_BASE_URL
};

global.utils = {
  loadPage: async (urlPath) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    await page.goto(`${global.config.baseUrl}/${urlPath}`, { waitUntil: ['domcontentloaded', 'networkidle0'] });
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
  customSnapshotsDir: './tests/image-snapshots',
  customDiffDir: './tests/image-snapshots/diff',
});
expect.extend({ toMatchImageSnapshot });
