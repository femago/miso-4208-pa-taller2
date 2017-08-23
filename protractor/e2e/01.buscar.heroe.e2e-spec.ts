import { TourOfHeroesPage } from './app.po';
import {browser, by, element, ElementFinder} from 'protractor';

describe('(1) Buscar Heroes', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateTo();
  });

  it('should display Bombasto Details', () => {
    let hero = 'Bombasto';
    element(by.id('search-box')).sendKeys(hero);
    expect(element(by.className('search-result')).getText()).toBe(hero);
  });

});
