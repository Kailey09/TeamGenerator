const Employee = require('../lib/Employee');
const employee = new Employee('jade', '5768980', 'jharper@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('jade');
    expect(employee.id).toBe('5768980');
    expect(employee.id).toBe('jharper@gmail.com');
});

test('test if we can get the name frim the getName() method', () => {
    expect(employee.getName()).toBe('jade');
});

test('test if we can get the name from the id from the getId() method', () => {
    expect(employee.getId()).toBe('5768980');
})

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jharper@gmail.com')
});