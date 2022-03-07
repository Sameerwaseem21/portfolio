import React from 'react'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}>
        <ul className={styles.links}>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/projects'>PROJECTS</Link></li>
            <li><Link to='/portfol1o'>PORTFOLIO</Link></li>
  
        </ul>
    </nav>
   
  )
}

export default Navbar
