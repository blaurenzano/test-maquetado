const puppeteer = require('puppeteer');

const PAGES = ['']

const VIEWPORTS = [
    {
        name: 'MOBILE',
        viewport: {
            width: 320,
            height: 480
        }
    }, {
        name: 'DESKTOP',
        viewport: {
            width: 1280,
            height: 720
        }
    }
]


;(async () => {
    const browser = await puppeteer.launch();

    for (let outsideIndex = 0; outsideIndex < VIEWPORTS.length; ++outsideIndex) {
        for( let index = 0; index < PAGES.length; ++index) {
            const page = await browser.newPage();

            page.setViewport(VIEWPORTS[outsideIndex].viewport);
            await page.goto(`http://localhost:8080/`);
            await page.screenshot({ path: __dirname + `/shots/${VIEWPORTS[outsideIndex].name}_${index}.png` });
        }
    }
    
    await browser.close();
})();