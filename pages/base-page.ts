
import {type Page, type Locator} from '@playwright/test';

export default class BasePage {

    readonly page: Page;
    readonly category: Locator;
    readonly psychology: Locator;

    constructor(page: Page) {
        this.page = page;
        this.psychology = this.page.locator('[href*="/books/psychology_26"]');
    }


    // async navigateByCategory() {
       
    // // }

    async navigateToPsychology() {
        await this.psychology.click();
    }
}