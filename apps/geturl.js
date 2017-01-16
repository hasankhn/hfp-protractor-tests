describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        browser.driver.get('http://caremerge.loc/hfp-web/');
        browser.driver.findElement(by.id('username')).sendKeys("superuser1");
        browser.driver.findElement(by.id('password')).sendKeys("123");
        browser.driver.findElement(by.id('login_submit')).click();
        expect(browser.driver.getTitle()).toEqual('My Dashboard')

    });
});