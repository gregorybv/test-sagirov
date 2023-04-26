// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={styles.navbar}>
      <div className='container'>
        <nav className={styles.nav}>
          <div className={styles.border}>
            <img className={styles.logo} src={logo} alt='logo' />
          </div>
          <ul className={`${styles.list} ${menuOpen ? styles.listOpen : ""}`}>
            <li>
              <a className={styles.link} href='#!'>
                Главная
              </a>
            </li>
            <li>
              <a className={styles.link} href='#!'>
                Технологии
              </a>
            </li>
            <li>
              <a className={styles.link} href='#!'>
                График полетов
              </a>
            </li>
            <li>
              <a className={styles.link} href='#!'>
                Гарантии
              </a>
            </li>
            <li>
              <a className={styles.link} href='#!'>
                О компании
              </a>
            </li>
            <li>
              <a className={styles.link} href='#!'>
                Контакты
              </a>
            </li>
          </ul>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <GiHamburgerMenu size={30} />
          </div>
        </nav>
        {menuOpen && (
          <div className={styles.dropdown}>
            <ul className={styles.dropdownList}>
              <li>
                <a className={styles.dropdownLink} href='#!'>
                  Главная
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href='#!'>
                  Технологии
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href='#!'>
                  График полетов
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href='#!'>
                  Гарантии
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href='#!'>
                  О компании
                </a>
              </li>
              <li>
                <a className={styles.dropdownLink} href='#!'>
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
