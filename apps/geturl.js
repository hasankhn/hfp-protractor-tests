var createPage = require("../PageObjects/protractorFunctions.js");
var helper = new createPage();
describe('Protractor Demo App', function () {
    it('should add one and two', function () {
       helper.start("http://caremerge.loc/hfp-web",'superuser1','123','login_submit','My Dashboard');

    });
});