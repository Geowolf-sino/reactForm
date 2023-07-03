import React, { useEffect, useState } from "react";
import Users from "./Users";
import Header from "./Header";
import '../style/main.css';
import AddUser from "./AddUser";

const HomePage = () => {

  const [users, setUsers] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState([]);
  // const [editUserForm, setEditUserForm] = useState([]);

  useEffect(() => {
    const userList = [
      {
        id: 1,
        firstName: 'Bob',
        lastName: 'Marley',
        bio: 'This will start the development server and open your application in a web browser. You can now begin working on your React project',
        age: 40,
        isHappy: true
      },
      {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        bio: 'Congratulations! You have successfully created a new React project using Create React App. You can now explore and modify the proje',
        age: 22,
        isHappy: false
      },
      {
        id: 3,
        firstName: 'John',
        lastName: 'Doe',
        bio: 'Congratulations! You have successfully created a new React project using Create React App. You can now explore and modify the proje',
        age: 52,
        isHappy: false
      }
    ];
    setUsers([...userList]);

    return () => {

    };
  }, []);

  const addNewUser = (newUser) => {
    const id  = users.length + 1;
    setUsers([...users, {id, ...newUser}])
  }

useEffect(() => {
    if(deleteUserId !== null){
      setUsers((prevUsers) => 
      prevUsers.filter((user)=> user.id !== deleteUserId)
      );
      setDeleteUserId(null);
    }
  },[deleteUserId])

const deleteUser = (id) => {
setDeleteUserId(id)
} 

const editUser = (user) => {
console.log(user);
}



  return (
    <div>
      <header className="header">
        <Header />
      </header>


      <main>
        <Users users={users} onDelete={deleteUser} onEdit={editUser}/>
      </main>
      <aside>
        <AddUser {...{ addNewUser }} />

      </aside>
    </div>
  )
}



export default HomePage;