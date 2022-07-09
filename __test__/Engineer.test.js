
const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Engineer = require('../lib/Engineer');

test("Can set Github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Doja", 1, "test@email.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\" ", () => {
    const testValue = "Engineer";
    const e = new Engineer("Doja", 1, "test@email.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});



