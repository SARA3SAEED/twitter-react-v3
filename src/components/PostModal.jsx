// components/PostModal.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    borderRadius: '15px',
    padding: '20px',
    width: '50%',
  },
};

Modal.setAppElement('#root');

function PostModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Post Modal"
    >
      <PostWrite />
      <button
        onClick={onRequestClose}
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-full mt-4"
      >
        Close
      </button>
    </Modal>
  );
}

export default PostModal;
