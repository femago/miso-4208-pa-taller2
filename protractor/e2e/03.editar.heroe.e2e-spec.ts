import { TourOfHeroesPage } from './app.po';
import { browser, by, element, ElementFinder } from 'protractor';

describe('(3) Editar Heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should change the name', () => {
    const newName = 'New Hero'
    page.navigateTo();
    page.searchHero('Narco');
    page.editHero(newName);
    page.navigateToDashboard();
    page.searchHero(newName);
    expect(element(by.tagName('h2')).getText()).toContain(newName);  
  });
});
