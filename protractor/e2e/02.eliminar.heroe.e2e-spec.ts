import { TourOfHeroesPage } from './app.po';
import {browser, by, element, ElementFinder} from 'protractor';

describe('Eliminar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should delete a heore after clicking in a x', () => {
    const heroes = page.getAllHeroes();
    const heroesCount = heroes.count();
    
    heroes[0].findElement(by.tagName('button')).click();

    expect(page.getAllHeroes().count()).toBe(heroesCount.then(n => n - 1));
  });

});
