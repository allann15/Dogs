import React, { useContext } from 'react'
import styles from './Footer.module.css';
import UserHeaderNav from './User/UserHeaderNav';
import useMedia from '../Hooks/useMedia';
import {ReactComponent as Dogs} from '../Assets/dogs-footer.svg'
import { UserContext } from '../UserContext';
const Footer = () => {
  const {data} = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
 
  return (
    <>
      {mobile && data  ? (
        <footer className={`${styles.footerMobile} container`}>
          <UserHeaderNav/>
        </footer>
      ) : (
        <footer className={styles.footer}>
          <Dogs/>
          <p>Dogs. Alguns direitos reservados.</p>
        </footer>
      )}
      
    </>
  )
}

export default Footer