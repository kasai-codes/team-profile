const Engineer = require("../lib/Engineer")

describe("engineerClass", function (){
    it("Should create engineer instance", function (){
        const engineer = new Engineer("bob", "github", "bob23@gmail.com"); 
        expect(typeof(engineer)).toBe("object");
    })

})