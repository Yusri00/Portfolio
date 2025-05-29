import { useState, useEffect } from 'react';

import Logo from '../assets/Logga-utanbg.png';

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);
  
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
    
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <div className='frontpage-container'>
    <nav className={`navbar-container ${isSticky ? 'sticky' : ''}`}>
      <ul className='nav-list'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Projects</a></li>
        <li className='logo-container'>
          <img className='logo-img' src={Logo} alt='Logo' />
        </li>
        <li><a href='#'>CV</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </nav>
    <div className='front-page'>
      <h1 className='hello'>Hello!</h1>
      <h1 className='intro-text'>I'm Yusra, <br></br>Frontend Developer & <br></br>UX Designer</h1>
      </div>
    </div>
  );
};

export default Home;