import { type Page, type Locator } from "@playwright/test";
import BasePage from "./base-page";

export default class CategoryPage extends BasePage {
  readonly bookArticle: Locator;

  constructor(page: Page) {
    super(page);
      this.bookArticle = this.page.locator('.product_pod');
  }

  async filterBook(bookName: string): Promise<number> {
    // I get link by name (alt text) but in case have localisation - alt can be different
    const thinkingBookArticle = this.bookArticle.filter({has: this.page.locator(`[alt="${bookName}"]`)})
    const thinkingBookPrice = await thinkingBookArticle.locator(`.product_price .price_color`).innerText();

    return Number(thinkingBookPrice.replace('£', ''));
  }
}