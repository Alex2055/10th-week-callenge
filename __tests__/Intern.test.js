const Intern = require('../lib/Intern.js');

test('creates an Engineer object', () => {
    const teamMember = new Intern({name:'Alex', id: '34',email: 'Alex@gmail.com', school: 'Lebanon School' } );

     expect(teamMember.name).toBe('Alex');
     expect(teamMember.id).toBe('34');
     expect(teamMember.email).toBe('Alex@gmail.com');
     expect(teamMember.schoolName).toBe('Lebanon School');
     expect(teamMember.getRole()).toEqual('Intern');


    
    
});