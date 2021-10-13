import React from 'react';
import { users } from '../users';
// We  destructure a users variable from
// the users to object.
import Card from './Card';

function Cardlist() {
  //Populate card component dynamically from users.js
  const cardLists = users.map(function (element, index) {
    return (
      <Card
        id={users[index].id}
        name={users[index].name}
        email={users[index].email}
      />
    );
  });

  return <div>{cardLists};</div>;
}

export default Cardlist;
//<Card id={users[0].id} name={users[0].name} email={users[0].email} />
//<Card id={users[0].id} name={users[1].name} email={users[1].email} />
//<Card id={users[0].id} name={users[2].name} email={users[2].email} />
