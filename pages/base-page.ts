
import {type Page} from '@playwright/test';

export default class BasePage {
    readonly url: string = 'https://books.toscrape.com/index.html';
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoPage() {
        await this.page.goto(this.url);
    }

    async navigateToCategory(category: string) {
        let categoryLink = this.page.getByRole('link', {name: category, exact: true});
        await categoryLink.click();
    }
}