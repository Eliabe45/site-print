import puppeteer from 'puppeteer';

interface PrintSiteParams {
  url: string;
  path?: string;
  mobile?: boolean;
  defaultViewport?: {
    width: number;
    height: number;
  };
  fullPage?: boolean;
}

const defaultDefaultViewport = {
  width: 1366,
  height: 768,
};

const defaultPath = './image.png';

/**
 * @param {PrintSiteParams} params
 * @param path path to save the image to, should have .png extension
 */
export async function printSite({
  url,
  path = defaultPath,
  defaultViewport = defaultDefaultViewport,
  fullPage = false,
  mobile,
}: PrintSiteParams): Promise<void> {
  const userAgent = mobile
    ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1'
    : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36';
  const browser = await puppeteer.launch({
    defaultViewport,
  });
  const page = await browser.newPage();
  page.setUserAgent(userAgent);

  await page.goto(url);
  await page
    .waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 })
    .catch(() => {});
  await page.screenshot({ path: path, type: 'png', fullPage: true });

  await browser.close();
}
