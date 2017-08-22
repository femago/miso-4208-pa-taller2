import { TourOfHeroesPage } from './app.po';
import {browser, by, element, ElementFinder} from 'protractor';

describe('Buscar Heroes', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display Bombasto Details', () => {
    page.navigateTo();
    page.searchHero('Bombasto');
    expect(element(by.tagName('h2')).getText()).toBe('Bombasto details!');    
  });

});
