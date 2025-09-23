let scrollToBottom = require("scroll-to-bottomjs");

global.utils = {
  loadPage: async (urlPath) => {
    // page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.goto(`${global.config.baseUrl}/${urlPath}`);//, {waitUntil: ['domcontentloaded', 'networkidle0']});
    return await page.waitForNavigation({ waitUntil: ['domcontentloaded', 'networkidle0'] });
  },
  loadPageLoc: async (pageLoc, urlPath) => {
    // page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    pageLoc.goto(`${global.config.baseUrl}/${urlPath}`);//, {waitUntil: ['domcontentloaded', 'networkidle0']});
    return await pageLoc.waitForNavigation({ waitUntil: ['domcontentloaded', 'networkidle0'] });
  },
  scrollToBottom: async () => {
    await page.evaluate(scrollToBottom);
  },
  scrollToBottomLoc: async (pageLoc) => {
    await pageLoc.evaluate(scrollToBottom);
  },
  autoScrollBottomLoc: (pageLoc) => {
    return pageLoc.evaluate(async () => {
      await new Promise((resolve) => {
        var totalHeight = 0;
        var distance = 100;
        var timer = setInterval(() => {
          var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if(totalHeight >= scrollHeight - window.innerHeight){
            clearInterval(timer);
            resolve();
          }
        });
      });
    });
  }
};