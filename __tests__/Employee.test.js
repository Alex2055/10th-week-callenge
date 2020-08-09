const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const teamMember = new Employee({name:'Alex', id: '34',email: 'Alex@gmail.com'} );

     expect(teamMember.name).toBe('Alex');
     expect(teamMember.id).toBe('34');
     expect(teamMember.email).toBe('Alex@gmail.com');
     expect(teamMember.getName()).toEqual(teamMember.name);


    
    
});