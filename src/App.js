import React, { use, useState } from 'react';
import FrmEdit from './components/EditForm';    
import AddForm from './components/AddForm';   
import Table from './components/Table';

function App() {
  
  const initialUsers = [
    { id: 1, nom: 'dubois',  prenom: 'eric',      email: 'aa@bb.cc',   status: 'admin' },
    { id: 2, nom: 'john',    prenom: 'philip',    email: 'aa1@bb1.cc', status: 'user'  },
    { id: 3, nom: 'jiji',    prenom: 'catherine', email: 'aa2@bb2.cc', status: 'admin' },
    { id: 4, nom: 'poll',    prenom: 'yves',      email: 'aa3@bb3.cc', status: 'user'  }
  ];

  const [users, setUsers] = useState(initialUsers); // users = initialUsers
  const [isEditing, setIsEditing] = useState(false); 
  const [currentUser, setCurrentUser] = useState(null);

 
  const handleEditClick = (user) => {
    console.log(user)
    setCurrentUser(user);
    setIsEditing(true);
  };

  
  const handleEditSubmit = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsEditing(false);
    setCurrentUser(null);
  };


  const addUser = (newUser) => {
    setUsers([...users, newUser]); // ...users signifie la derniere état du variable et il cree une copie 
  };


  const lastId = users.length > 0 ? users[users.length - 1].id : 0;  //lastId=4 

  return (
    <div style={{ margin: '20px' }}>
      <h1>Liste des Utilisateurs</h1>

      
      <FrmEdit
        currentUser={currentUser}
        isediting={isEditing}
        handleEditSubmit={handleEditSubmit}
      />


      <AddForm  
        addUser={addUser} //fonctiona travers props 
        lastId={lastId}  // variable a travers props 
      />

     <Table 
     handleEditClick={handleEditClick}
     users={users} 
     />
     
    </div>
  );
}

export default App;
