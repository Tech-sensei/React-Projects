import React from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList = ({ users, userRemove }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => {
          const { id, name, age } = user;
          return (
            <li key={id}>
              {name} ({age} years old)
              <button className={classes.btn} onClick={() => userRemove(id)}>
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
