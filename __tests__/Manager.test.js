const Manager = require('../lib/Manager.js');

test('creates an Engineer object', () => {
    const teamMember = new Manager({name:'Alex', id: '34',email: 'Alex@gmail.com', number: '615-847-6457' } );

     expect(teamMember.name).toBe('Alex');
     expect(teamMember.id).toBe('34');
     expect(teamMember.email).toBe('Alex@gmail.com');
     expect(teamMember.officeNumber).toBe('615-847-6457');
     expect(teamMember.getRole()).toEqual('Manager');


    
    
});