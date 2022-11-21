//react function component
import React from 'react';

//importing the css file
import '../styles/Header.scss';

//importing the image
import avatar from '../assets/avatar.png';


//creating the function component
function Header() {
    return (
        <header className="App-header">
        <img src={avatar} className="Avatar" alt="logo" />
        <div className='title'>
          Hi, I'm Mohamed El Amine CHAFIKI
        </div>
        <div className='subtitle'>
          I'm a 2nd year Master's student in Data Science & Business Intelligence at 
          the Faculty of Sciences and Techniques of Marrakech, Morocco.
        </div>
      </header>
    );
}

//exporting the function component
export default Header;