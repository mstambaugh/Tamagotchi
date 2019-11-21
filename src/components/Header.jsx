import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Pet</Link> | <Link to="/newpet">Add a new pet?</Link>
    </div>
  );
}

export default Header;