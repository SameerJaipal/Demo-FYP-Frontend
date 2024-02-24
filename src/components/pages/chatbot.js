import React from 'react';
import '../../App.css';

export default function Chatbot() {
  return (
    <div className='chatbot-container'>
      <div className='chatbot'>
        <div className='chatbot-message'>
          <p>Hello! How can I assist you today?</p>
        </div>
        <div className='user-message'>
          <p>Can you provide more information about your services?</p>
        </div>
        {/* More chat bubbles go here */}
      </div>
    </div>
  );
}
