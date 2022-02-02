import React from 'react'
import styles from './navbar.module.scss'
type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}>
        <ul className={styles.links}>
            <li><a href="/">HOME</a></li>
            <li><a href="/">CV</a></li>
            <li><a href="/">PROJECT</a></li>
  
        </ul>
    </nav>
   
  )
}

export default Navbar
