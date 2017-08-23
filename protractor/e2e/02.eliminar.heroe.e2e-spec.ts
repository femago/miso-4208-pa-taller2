import { TourOfHeroesPage } from './app.po';
import {browser, by, element, ElementFinder} from 'protractor';

describe('(2) Eliminar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });
  
  it('should delete a hero after clicking in a x', () => {
    page.navigateToHeroes();
    const heroes = page.getAllHeroes();
    const heroesCount = heroes.count();
    let first = heroes.first();
    first.all(by.tagName('button')).get(0).click();
    expect(page.getAllHeroes().count()).toBe(heroesCount.then(n => n - 1));
  });

});
