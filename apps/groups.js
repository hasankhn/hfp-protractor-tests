var createPage = require("../PageObjects/protractorFunctions.js");
require("../config/waitReady.js");
var helper = new createPage();
describe('First Caremerge test', function () {

    it("should login", function () {
        helper.start("http://caremerge.loc/hfp-web", 'shujaatoakpark', '123', 'login_submit', 'My Dashboard');
        expect(browser.driver.getCurrentUrl()).toContain("caremerge");
    })

    it('should open groups', function () {
       // browser.ignoreSynchronization = false;
        expect(browser.driver.getCurrentUrl()).toContain("caremerge");
        browser.sleep(5000);
        browser.executeScript('arguments[0].click()',browser.driver.findElement(By.css('.groups_listing')));
        browser.sleep(20000);
        // browser.driver.wait(function () {
        //     browser.driver.isElementPresent(by.css('.groups_listing'));
        // }, 30000);
        //browser.wait(element(by.CSS('.groups_listing')).isPresent);
        // var el = element(by.css('.groups_listing'));
        // browser.driver.wait(protractor.until.elementIsNotVisible(el));
        // // browser.driver.wait(function () {
        //     browser.driver.findElement(by.css('.groups_listing')).click();
        // }, 30000);

    });
})