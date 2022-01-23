const Manager = require("../lib/Manager")

describe("managerClass", function (){
    it("Should create a manager instance", function (){
        const manager = new Manager("bob","bob23@gmail.com", 100); 
        expect(typeof(manager)).toBe("object");
    })

})