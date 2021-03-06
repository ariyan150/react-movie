import "./Header.css"
import sr from './ScrollReveal'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


function Header({user}) {
  const isLoggedIn = false
  const LinkStyle = {
    color: 'white',
    textDecoration: 'none',
  }

  useEffect(()=>{
    const config = {
        origin: 'top',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        
      }
    sr.reveal('.header', config)
  },[])

    return (
      <div className="header">
        <div className='header__link'><Link to='/' style={LinkStyle}>React App</Link></div>
        <div class="vl"/> 
        <div className='header__link'><Link to='/movies' style={LinkStyle}>Movies</Link></div>
        <div class="vl"/> 
        <div className='header__user'>
          {isLoggedIn ? user : <Link to='/register' style={LinkStyle}>SignIn / SignUp</Link>}
        </div>
      </div>
    );
  }
  
  export default Header;
  