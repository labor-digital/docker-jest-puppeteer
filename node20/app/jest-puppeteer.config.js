const config = {
  launch: {
    acceptInsecureCerts: true,
    // slowMo: 1000,
    args: [
      '--no-sandbox',
      // '--window-size=1920,1080',
    ],
    defaultViewport: {
      width: 1920,
      height: 1080
    },
  }
};

module.exports = config;
