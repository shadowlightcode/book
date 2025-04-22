import { type Page, type Locator } from "@playwright/test";
import BasePage from "./base-page";

export default class PsychologyPage  extends BasePage {

readonly book: Locator;

constructor(page: Page) {
  super(page);
    this.book = this.page.locator('.product_pod');
}

async filterBook() {
  const books = await this.book.all();
  const bookLocator = this.page.locator(`[alt="Thinking, Fast and Slow"]`);

  for(const b of books) {
    const price = await b.filter({has: bookLocator}).locator(`.product_price .price_color`).innerText();
    console.log(price);
  }
}

}

