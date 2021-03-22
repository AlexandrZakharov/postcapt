import { useState } from "react";
import styles from './Navbar.module.css';
import Cross from '../../assets/icons/cross.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div onClick={() => setOpened(true)} className={styles.navbar} style={opened ? { width: 360 + 'px', alignItems: 'baseline' } : { width: 120 + 'px', alignItems: 'center', cursor: 'pointer' }}>
      <div className={styles.navbar__wrapper} style={opened ? { marginTop: 160 + 'px' } : {marginTop: 0 + 'px' }}>
        {opened
          ? <div className={styles.menu__wrapper}>
              <img onClick={(e) => {
                setOpened(false)
                e.stopPropagation()
              } } className={styles.navbar__close} src={Cross} alt="cross"/>
              <h3 className={styles.navbar__getstarted}>
                <Link to='/auth'>GET STARTED</Link>
              </h3>
              <ul className={styles.navbar__menu}>
                <li className="active">Home</li>
                <li>Trend</li>
                <li>Contact</li>
                <li>About</li>
              </ul>
            </div>
          : <div onClick={() => setOpened(true)} className={styles.navbtn}>...</div>}
      </div>
    </div>
  )
}

export default Navbar;
