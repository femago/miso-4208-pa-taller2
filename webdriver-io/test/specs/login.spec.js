var assert = require('assert');
describe('(1) los estudiantes login', function() {
    it(' debe ingresar con una cuenta existente', function () {
        browser.url('https://losestudiantes.co');
        browser.click('button=Cerrar');
        browser.waitForVisible('button=Ingresar', 5000);
        browser.click('button=Ingresar');

        var cajaLogIn = browser.element('.cajaLogIn');
        var mailInput = cajaLogIn.element('input[name="correo"]');

        mailInput.click();
        mailInput.keys('crustojehi@2emea.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');

        passwordInput.click();
        passwordInput.keys('miso4208.*');

        cajaLogIn.element('button=Ingresar').click()
        
        expect(browser.waitForVisible('#cuenta', 5000)).toBeDefined();
    });
});