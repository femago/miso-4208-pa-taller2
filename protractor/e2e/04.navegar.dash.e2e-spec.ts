import { TourOfHeroesPage } from './app.po';
import {browser, by, element, ElementFinder} from 'protractor';

describe('Navegar a un heroe desde', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('el dashboard debe mostrar el detalle del heroe', () => {
    page.navigateTo();
    
  });

  it('la lista de heroes debe mostrar el detalle del heroe', () => {
    page.navigateToHeroes();
    let first = page.getAllHeroes().get(0);
    first.click();
    let name = first.all(by.tagName('span')).get(1).getText();
    
    page.viewHeroDetails();
    
    expect(element(by.tagName('h2')).getText()).toContain(name);

  });
  
  it('la busqueda debe mostrar el detalle del heroe', () => {
    page.navigateTo();
    page.searchHero('Bombasto');
    expect(element(by.tagName('h2')).getText()).toBe('Bombasto details!');   
  });
});


