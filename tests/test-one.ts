import {test, expect} from '@playwright/test';
import BasePage from '../pages/base-page';
import PsychologyPage from '../pages/psychology-page';

test('', async({page}) => {
    await page.goto('https://books.toscrape.com/index.html');

    const basePage = new BasePage(page);
     await basePage.navigateToPsychology();

     await page.waitForURL('**/books/psychology_26/index.html', {waitUntil: 'domcontentloaded'});

     const psychologyPage = new PsychologyPage(page);

     




    // 1) get to site
    // 2) navigate to this three books
    // 3) get the prise
    // 4) get total
    // 5) get evarage




})