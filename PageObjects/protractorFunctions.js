
module.exports = function () {

    this.start = function (url) {
        beforeEach(function() {
            return browser.ignoreSynchronization = true;
        });
        browser.get(url)
        // expect(browser.getCurrentUrl()).toBe(url);
        // browser.driver.get('http://api.caremerge.loc/hfp-web');

        // browser.driver.findElement(By.id('username')).sendKeys('superuser1');
        // browser.driver.findElement(By.id('password')).sendKeys('123');
        // browser.driver.findElement(By.id('login_submit')).click();

    }

}