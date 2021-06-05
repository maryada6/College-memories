import React from 'react';
import { Link } from 'react-router-dom'
const HeaderPart=()=>{
   return( <header>
    <div class="progress"></div>
    <nav>
      <ul>
      <Link to="/" >
      <li>Home</li>
      </Link>
      <Link to="/" >
      <li>B10</li>
      </Link>
      <a href="#quote" data-name="farewell">
          <li>💙</li>
      </a>
      </ul>
    </nav>
  </header>
   ) 
}

export default HeaderPart;