import React, { useContext, useEffect, useState } from 'react'
import UserHeader from './UserHeader'
import { Route, Routes, useLocation } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../UserContext'
import NotFound from '../NotFound'
import Head from '../Helper/Head'
import useMedia from '../../Hooks/useMedia'

const User = ({responsivo}) => {
  const {data} = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
 
  return (
    <section className='container'>
      <Head title='Minha Conta'/>
      
      <UserHeader responsivo={responsivo}/>
      <Routes>
        <Route path='/' element={<Feed user={data.id}/>}/>
        <Route path='postar' element={<UserPhotoPost/>}/>
        <Route path='estatisticas' element={<UserStats/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </section>
  )
}

export default User
