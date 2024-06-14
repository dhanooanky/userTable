

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import './AddUser.css';
import angle from '../components/icons/angle.svg'
import usericon from '../components/icons/user.svg'
import phone from '../components/icons/phone.svg'

const EditUser = ({ users, updateUser }) => {
  const { index } = useParams();
  const userIndex = parseInt(index, 10);
  const user = users[userIndex];
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setNumber(user.number);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userIndex, { name, number });
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div >
    <div className="add-heading">
      <div>
        <img onClick={handleCancel} src={angle} alt=''></img>
      </div>
      <h2 className='active-user'> Update {name}</h2>
    </div>

    <form onSubmit={handleSubmit} >
      <div className='add-user-form'>

        <div className="input-field-container">
          <img  className='icons' src={usericon}></img>
          <input placeholder='User Name' className="input-field" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="input-field-container">
          <img className='icons' src={phone}></img>
          <input placeholder='Phone Number' className="input-field" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>

      </div>

      <div className='button-add-new'>
      <button className="cancel-button" type="button" onClick={handleCancel}>Discard Changes</button>
    { name &&  <button className="add-user-button" type="submit">Submit</button>}
      </div>

    </form>
  </div>
    
  );
};

export default EditUser;

