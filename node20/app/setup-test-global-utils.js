global.utils = {
  loadPage: async (urlPath) => {
    // page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    return await page.goto(`${global.config.baseUrl}/${urlPath}`, {waitUntil: ['domcontentloaded', 'networkidle0']});
  }
};