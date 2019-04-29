import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className='header'>
      <div className='room-name'>
        <h1>Tap Room</h1>
      </div>
      <div className='links'>
        <a><Link to='/'>Home</Link></a>
        <a><Link to='/admin'>Admin</Link></a>
      </div>
    </div>
  );
}

export default Header;
