const config = {
  launch: {
    acceptInsecureCerts: true,
    // slowMo: 10,
    args: [
      '--no-sandbox',
      '--window-size=1920,1080',
      '--font-render-hinting=none',
      '--enable-font-antialiasing',
      '--disable-gpu',
      '--force-color-profile=srgb',
    ],
    // headless: true,
    defaultViewport: {
      width: 1920,
      height: 1080
    },
    // executablePath: '/usr/bin/chromium',
  }
};

module.exports = config;
