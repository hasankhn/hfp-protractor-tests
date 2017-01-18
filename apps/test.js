/**
 * Created by shujaatali on 1/17/17.
 */
describe("first test",function(){
    it("should open the correct page",function(){
        browser.get("http://www.thetestroom.com/jswebapp");
        expect(browser.driver.getCurrentUrl()).toContain("jswebapp");
    });
    it("Generate the correct string",function(){
        var texMsg = "rock";
        browser.get("http://www.thetestroom.com/jswebapp");
        expect(browser.driver.getCurrentUrl()).toContain("jswebapp");
        element(by.model("person.name")).sendKeys("rock");
        element(by.binding("person.name")).getText().then(function(text){
            console.log(text);
            expect(text).toContain(texMsg);
        });
    });
    it("should check correcct number of elements in the select",function(){
       // browser.get("http://www.thetestroom.com/jswebapp");
        element(by.buttonText("CONTINUE")).click();
        element(by.model("animal")).$("[value='1']").click();
        element.all(by.css(".ng-pristine option")).then(function(items){
            expect(items.length).toBe(4);
            expect(items[1].getText()).toBe("George the Turtle");
        });
       // browser.sleep(5000);
    });
});