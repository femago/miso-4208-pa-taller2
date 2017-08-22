import { TourOfHeroesPage } from './app.po';
import {browser, by, element, ElementFinder} from 'protractor';

describe('Eliminar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should delete a hero after clicking in a x', () => {
    const heroes = page.getAllHeroes();
    const heroesCount = heroes.count();
    let first = heroes.first();
    first.all(by.tagName('button')).get(0).click();
    expect(page.getAllHeroes().count()).toBe(heroesCount.then(n => n - 1));
  });

});
