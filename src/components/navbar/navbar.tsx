import React from 'react'
import styles from './navbar.module.scss'
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}>
        <ul className={styles.links}>
            <li><a href='/'>HOME</a></li>
            <li><a href='/projects'>PROJECTS</a></li>
            <li><a href='/portfol1o'>PORTFOLIO</a></li>
  
        </ul>
    </nav>
   
  )
}

export default Navbar
