
import React from 'react';

const DeleteUserButton = ({ onDelete }) => {
  const handleClick = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete user details?");
    if (confirmDelete) {
      onDelete();
    }
  };

  return (
    <>
      <button className='btn' onClick={handleClick}>Delete</button>
      <p></p>
    </>
  );
};

export default DeleteUserButton;



