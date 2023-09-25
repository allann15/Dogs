import React, { useContext, useState } from 'react'
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFotos} from '../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../Assets/sair.svg';
import {ReactComponent as Casa} from '../../Assets/casa_nova.svg';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import styles from './UserHeaderNav.module.css'
import { useNavigate } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';
const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)')
  const {userLogout} = useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout(){
    userLogout();
    navigate('/login')
  }
  return (
    
    <nav className={styles.nav}>
     <NavLink to='/' >
        <Casa/>
        
        
      </NavLink>
      <NavLink to='/conta' end>
        <MinhasFotos/>
        
        
      </NavLink>
      <NavLink to='/conta/estatisticas'>
        <Estatisticas/>
        
        
      </NavLink>
      <NavLink to='/conta/postar'>
        <AdicionarFotos/>
        
        
      </NavLink>
     
      <button onClick={handleLogout}>
        <Sair/>
        
        </button>
    </nav>
  )
}

export default UserHeaderNav