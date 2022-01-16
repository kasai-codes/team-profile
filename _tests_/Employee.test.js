const Employee = require("../lib/Employee")

describe("employeeClass", function (){
    it("Should create employee instance", function (){
        const employee = new Employee("bob", 23, "bob23@gmail.com"); 
        expect(typeof(employee)).toBe("object");
    })

})