
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) {
    return null; 
  }

  return (
    <Modal isOpen={true} onRequestClose={onClose} className='modal-container'>
      <button onClick={onClose} className='close-btn'>X</button>
      <div>
        <h2>Client Details</h2>
        <p>First Name: {user.name}</p>
        <p>Last Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phone}</p>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;

