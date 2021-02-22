const Intern = require("../lib/Intern");

test("Test can set school via constructor", () => {
    const testValue = "USC";
    const e = new Intern("foo", 1, testValue, "test@testemail.com");
    expect(e.school).toBe(testValue);
});
test("Can get school via getGithub()", () => {
    const testValue = "USC";
    const e = new Intern("foo", 1, testValue, "test@testemail.com");
    expect(e.getSchool()).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("foo", 1, "test@testemail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});