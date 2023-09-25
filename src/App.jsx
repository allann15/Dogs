import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login/Login'
import { UserContext, UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import User from './Components/User/User'
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile'
import NotFound from './Components/NotFound'
import LoginFooter from './Components/Login/LoginFooter'

function App() {
  
  const [responsivo, setResponsivo] = useState(null)
  useEffect(() => {
    
    const updateResponsivo = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640) {
        setResponsivo(true);
      } else {
        setResponsivo(false);
      }
    };

    window.addEventListener('resize', updateResponsivo);

    return () => {
      window.removeEventListener('resize', updateResponsivo);
    };
   
  }, [window.location])
  
  
  return (
    <div className='App'>
      <BrowserRouter>
       <UserStorage>
          <Header/>
          <main className='AppBody'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login/*' element={<Login/>}/>
                <Route path='conta/*' element={<User responsivo={responsivo}/>}/>
                <Route path='foto/:id' element={<Photo/>}/>
                <Route path='perfil/:user' element={<UserProfile/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
          </main>
          <Footer/> 
        </UserStorage>
     </BrowserRouter>
    </div>
  )
}

export default App
