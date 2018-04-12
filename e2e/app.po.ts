import { browser, element, by } from 'protractor';

export class huperPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('huper-root h1')).getText();
  }
}
