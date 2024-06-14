
import React from 'react';
import { Link } from 'react-router-dom';
import './UserTable.css';

const UserTable = ({ users, deleteUser }) => {
  return (
    <div className="user-table">
      <div className="table-heading">
        <h2 className='active-user'>Active Users</h2>
        <Link to="/add">
          <div>
            <button className="add-user-button">Add New User</button>
          </div>
        </Link>
      </div>

      <table id='table-container'>
        <thead className='header-of-table'>
          <tr className='table-row'>
            <th className="main-name">Sr. No.</th>
            <th className="main-name">Name</th>
            <th className="main-name">Number</th>
            <th className="main-name">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className='table-row'>
              <td className="table-row-details">{index + 1}</td>
              <td className="table-row-details">{user.name}</td>
              <td className="table-row-details">{user.number}</td>
              <td className="table-row-details">
                <Link to={`/edit/${index}`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <button className="delete-button" onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
