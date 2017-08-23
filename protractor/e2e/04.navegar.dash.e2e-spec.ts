import { TourOfHeroesPage } from './app.po';
import { browser, by, element, ElementFinder } from 'protractor';

describe('Navegar a un heroe desde', () => {
  let page: TourOfHeroesPage;
  let selectHeroAndValidate = function () {
    
  }
  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateTo();
  });

  it('(4) el dashboard debe mostrar el detalle del heroe', () => {
    let first = element.all(by.className('hero')).get(0);
    let name = first.element(by.tagName('h4')).getText();
    first.click();
    expect(element(by.tagName('h2')).getText()).toContain(name);
  });

  it('(5) la lista de heroes debe mostrar el detalle del heroe', () => {
    page.navigateToHeroes();
    let first = page.getAllHeroes().get(0);
    first.click();
    let name = first.all(by.tagName('span')).get(1).getText();

    page.viewHeroDetails();

    expect(element(by.tagName('h2')).getText()).toContain(name);
  });

  it('(6) la busqueda debe mostrar el detalle del heroe', () => {
    page.searchHero('Bombasto');
    expect(element(by.tagName('h2')).getText()).toBe('Bombasto details!');
  });
});


