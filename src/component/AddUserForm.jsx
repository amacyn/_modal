
import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setFormData({
        name: '',
        username: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Phone Number:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <button type="submit" className='btn'>Add User</button>
    </form>
  );
};

export default AddUserForm;
