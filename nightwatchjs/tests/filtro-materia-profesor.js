module.exports = { 
  before : function (browser) {
    browser.resizeWindow(1280, 600);
  },
  '(4) Filtros por materia': function (browser) {
    browser
      .url('https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
      .waitForElementVisible('input[name="ISIS1206L"]', 1000)
      .click('input[name="ISIS1206L"]')
      .assert.elementNotPresent(".leftCalificacion")
      .waitForElementVisible('input[name="ISIS1206"]', 1000)
      .click('input[name="ISIS1206"]')
      .assert.elementPresent(".leftCalificacion")
      .end();
  }
};