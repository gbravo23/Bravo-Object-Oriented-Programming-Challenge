const Engineer = require("../lib/Engineer");

test("Test can set github account via constructor", () => {
    const testValue = "githubUser";
    const e = new Engineer("foo", 1, testValue, "test@testemail.com");
    expect(e.github).toBe(testValue);
});
test("Can get github via getGithub()", () => {
    const testValue = "githubUser";
    const e = new Engineer("foo", 1, testValue, "test@testemail.com");
    expect(e.getGithub()).toBe(testValue);
});
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("foo", 1, "test@testemail.com", testValue);
    expect(e.getRole()).toBe(testValue);
});