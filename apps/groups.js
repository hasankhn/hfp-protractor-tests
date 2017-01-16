describe('First Caremerge test',function(){
    it('should open caremerge site',function(){
        browser.ignoreSynchronization = true;
        browser.get('http://caremerge.loc/hfp-web/');
        element(by.id('username')).sendKeys('shujaatoakpark');
        element(by.id('password')).sendKeys('123');
        element(by.id('login_submit')).click();
        browser.ignoreSynchronization = false;
        browser.get('http://api.caremerge.loc/facilities/103/groups/#/@groups@/');
    });
});