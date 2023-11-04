import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { GlobalContext} from './components/Context/GlobalContext'
// import { useContext } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main/Main'
import Video from './components/Video/Video'
import Error404 from './components/Error404/Error404'
import MobileSidebar from './components/MobileSidebar/MobileSidebar'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Search from './components/Search/Search'
import Profile from './components/Profile/Profile'

function App() {

  // const {searchMobile, setSearchMobile} = useContext(ContextProvider)
  const [showNavbar, setShiwNavbar] = useState(true)

  useEffect(() => {
    if(location.pathname === '/register' || location.pathname === '/login') {
      setShiwNavbar(false)
    }
  }, [location])

  const localUser = localStorage.getItem('userName')

  return (
    <>
    <GlobalContext>
      <BrowserRouter>
        {showNavbar && <Sidebar />}
        {showNavbar && <Navbar />}
        {/* <div onClick={()=>setSearchMobile(!searchMobile)} className={`${searchMobile ? 'block' : 'hidden'} h-screen w-screen bg-gray-800/10`}></div> */}
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/video/:title/:videoId/:viewCount"  element={<Video />}/>
          <Route path="/query"  element={<Search />}/>
          <Route path="/profile"  element={<Profile />}/>
          <Route path="/query"  element={localUser ? <Navigate to={"/query"} /> : <Navigate to={"/login"} />}/>
          <Route path="/profile"  element={localUser ? <Navigate to={"/profile"} /> : <Navigate to={"/login"} />}/>
          <Route path="/error404"  element={<Error404/>} />
          <Route path="*" element={<Navigate to='/error404' />} />
        </Routes>
        {showNavbar && <MobileSidebar />}
      </BrowserRouter>
    </GlobalContext>
    </>
  )
}

export default App
