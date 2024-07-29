import { useState } from 'react';
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };    

    return (
    <nav className={styles.navbar}>        
        <button className={styles.menuToggle} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/portfolio'>Portfolio</a></li>
        <li><a href='/contact'>Contact</a></li>
        </ul>
        <div className={styles.logo}>SL</div>
    </nav>
    );
};


  
  export default Navbar;
  