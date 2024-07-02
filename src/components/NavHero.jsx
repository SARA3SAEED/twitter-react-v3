import React from 'react';
import { Link } from 'react-router-dom';

export default function NavHero() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Posts</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Replies</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Highlights</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Articles</p>
        <p style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Media</p>
        <Link to="/favorite" style={{ color: '#555', cursor: 'pointer', padding: '0 10px', transition: 'color 0.3s ease' }}>Likes</Link>
      </div>
      <hr style={{ border: '.2px solid #555' }} />
    </>
  );
}
