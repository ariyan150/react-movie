import "./Header.css"
import sr from './ScrollReveal'
import { useEffect } from 'react'

function Header({user}) {

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
        <h1>Movies | {user} | React App</h1>
      </div>
    );
  }
  
  export default Header;
  