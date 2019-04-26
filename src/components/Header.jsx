import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/styles.scss';

function Header(){
  return (
    <div className='header'>
      <h1>Tap Room</h1>
      <a><Link to="/">Home</Link></a> | <a><Link to="/admin">Admin</Link></a>
    </div>
  );
}

export default Header;
