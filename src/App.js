import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Darrell Steward', number: '(307) 555-0133' },
    { name: 'Dianne Russell', number: '(217) 555-0113' },
    { name: 'Floyd Miles', number: '(684) 555-0102' },
    { name: 'Annette Black', number: '(207) 555-0119' },
    { name: 'Devon Lane', number: '(704) 555-0127' },
    { name: 'Leslie Alexander', number: '(671) 555-0110' },
    { name: 'Jane Cooper', number: '(308) 555-0121' },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  const updateUser = (index, updatedUser) => {
    const updatedUsers = users.map((user, i) => (i === index ? updatedUser : user));
    setUsers(updatedUsers);
  };

  return (
    <div className='main-container'>
      <Routes>
        <Route path="/" element={<UserTable users={users} deleteUser={deleteUser} />} />
        <Route path="/add" element={<AddUser addUser={addUser} />} />
        <Route path="/edit/:index" element={<EditUser users={users} updateUser={updateUser} />} />
      </Routes>
    </div>
  );
};

export default App;


