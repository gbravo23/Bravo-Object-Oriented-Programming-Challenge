const Manager = require("../lib/Manager");

test("Test can set office number via constructor", () => {
    const testValue = 1;
    const e = new Manager("foo", 1, testValue, "test@testemail.com");
    expect(e.officeNumber).toBe(testValue);
});
test("Can get office number via getOfficeNumber()", () => {
    const testValue = 1;
    const e = new Manager("foo", 1, testValue, "test@testemail.com");
    expect(e.getOfficeNumber()).toBe(testValue);
});
test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("foo", 1, "test@testemail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});