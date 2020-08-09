const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const teamMember = new Engineer({name:'Alex', id: '34',email: 'Alex@gmail.com', github: 'Alex2055.gitHub.com' } );

     expect(teamMember.name).toBe('Alex');
     expect(teamMember.id).toBe('34');
     expect(teamMember.email).toBe('Alex@gmail.com');
     expect(teamMember.gitHubaccount).toBe('Alex2055.gitHub.com');
     expect(teamMember.getRole()).toEqual('Engineer');


    
    
});