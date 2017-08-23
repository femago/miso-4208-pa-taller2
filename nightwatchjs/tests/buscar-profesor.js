module.exports = { // adapted from: https://git.io/vodU0
  '(2) Buscar Profesor': function (browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .setValue('.Select-input input', 'Mario Linares Vasquez')
      .waitForElementPresent('.Select-option', 2000)
      .click('.Select-menu-outer .Select-menu .Select-option')
      .waitForElementPresent('h1.nombreProfesor', 2000)
      .assert.containsText('h1.nombreProfesor', 'Mario Linares Vasquez')
      .end();
  }
};