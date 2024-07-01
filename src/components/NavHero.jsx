import React from 'react';

export default function NavHero() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Posts</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Replies</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Highlights</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Articles</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Media</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Likes</p>
      </div>
      <hr style={{ border: '.2px solid #555' }} />
    </>
  );
}
