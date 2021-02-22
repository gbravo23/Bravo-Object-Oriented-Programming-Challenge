const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Test can set name via constructor arguments", () => {
    const name = "Worker";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Test can set id", () => {
    const value = 1;
    const e = new Employee("foo", value);
    expect(e.id).toBe(value);
});

test("Test can set email", () => {
    const testValue = "test@testemail.com";
    const e = new Employee("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Worker";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 1;
    const e = new Employee("foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@testemail.com";
    const e = new Employee("foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Worker", 1, "test@testemail.com");
    expect(e.getRole()).toBe(testValue);
});
