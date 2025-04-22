import {test, expect} from '@playwright/test';
import BasePage from '../pages/base-page';
import CategoryPage from '../pages/category-page';

// 1) get to site
// 2) navigate to this three books
// 3) get the price
// 4) get total
// 5) get avarage

test('Check book`s prices', async({page}) => {
    const bookTitles = {
        'History': 'Sapiens: A Brief History of Humankind',
        'Psychology': 'Thinking, Fast and Slow',
        'Nonfiction': 'Algorithms to Live By: The Computer Science of Human Decisions'
    };

    const expectedPrices = [ 54.23, 21.14, 30.81 ];
    const expectedSumPrice = 106.18;
    const expectedAvgPrice = 35.39;

    let actualPrices: Array<number> = [];

    const basePage = new BasePage(page);
    await basePage.gotoPage();

    for(const category in bookTitles) {
        await basePage.navigateToCategory(category);
     
        const categoryPage = new CategoryPage(page);
        let price = await categoryPage.filterBook(bookTitles[category]);
        actualPrices.push(price);
    }

    let sumFunc = (prices) => prices.reduce((a, b) => a + b);
    let actualSum = sumFunc(actualPrices);
    let actualAvg = actualSum / actualPrices.length;
    actualAvg = Number(actualAvg.toFixed(2));

    expect(actualPrices).toEqual(expectedPrices);
    expect(actualSum).toEqual(expectedSumPrice);
    expect(actualAvg).toEqual(expectedAvgPrice);

    console.log(actualPrices, actualSum, actualAvg);
})