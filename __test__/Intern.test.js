const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern("Doja", 1, "test@email.com", testValue);
    expect(e.school).toBe(testValue);
});

test('getRole() should return \"Intern\"', () => {
    const testValue = "Intern";
    const e = new Intern('Doja',1, "test@email.com", "UCLA");
    expect(e.getSchool()).toBe(testValue)
});
