import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  navigateToDashboard() {
    element(by.linkText('Dashboard')).click();
  }


  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHero(heroName: string) {
    element(by.id('search-box')).sendKeys(heroName);
    element(by.className('search-result')).click();
  }
  
  viewHeroDetails() {
    element(by.buttonText('View Details')).click();
  }

  editHero(newHeroName: string) {
    element(by.tagName('input')).sendKeys(newHeroName);
    element(by.buttonText('Save')).click();
  }
}
