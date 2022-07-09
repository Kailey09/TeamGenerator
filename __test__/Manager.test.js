const Manager = require('./lib/Manager.js');
const manager = new Manager('jade', '5768980', 'jharper@gmail.com', '432');


test('test if we can get the constructor values for manager object', () => {
    expect(manager.name).toBe('jade');
    expect(manager.id).toBe('5768980');
    expect(manager.email).toBe('jharper@gmail.com');
    expect(manager.officeNumber).toBe('432');
});

test('test if we can get the name from getName() method', () => {
    expect(manager.getName()).toBe('jade')
})

test('test if we can get the name frim the getName() method', () => {
    expect(manager.getName()).toBe('jade');
});

test('test if we can get the name from the id from the getId() method', () => {
    expect(manager.getId()).toBe('5768980');
})

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('jharper@gmail.com')
});