import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [{ name: uName, age: uAge, id: Math.random() }, ...prevUsersList];
    });
  };

  const removeUser = (id) => {
    setUsersList((newUsersList) => {
      let newUsers = newUsersList.filter((user) => user.id !== id);
      return newUsers;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} userRemove={removeUser} />
    </div>
  );
}

export default App;
