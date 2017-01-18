
module.exports = function () {

    var driver = browser.driver;
    browser.driver.manage().window().setSize(1280, 1024);
    this.start = function (url,username,password,login_btn,nextPage) {
        driver.get(url);
        driver.findElement(by.id('username')).sendKeys(username);
        driver.findElement(by.id('password')).sendKeys(password);
        driver.findElement(by.id(login_btn)).click();
        expect(driver.getTitle()).toEqual(nextPage)
      
    }

}