const Intern = require("../lib/Intern")

describe("internClass", function (){
    it("Should create intern instance", function (){
        const intern = new Intern("bob","bob23@gmail.com", "school"); 
        expect(typeof(intern)).toBe("object");
    })

})