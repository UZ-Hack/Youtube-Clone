import { useContext } from 'react'
import { ContextProvider } from '../Context/GlobalContext'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiSearch } from 'react-icons/fi'
import { FiVideo } from 'react-icons/fi'
import { HiOutlineMoon } from 'react-icons/hi'
import { FiSun } from 'react-icons/fi'
import { IoMdNotificationsOutline } from "react-icons/io";
import youtubeLogo from '../../assets/youtube-logo.svg'
import youtubeLogoLight from '../../assets/youtube-logo-light.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {mode, setMode, closeSidebar, setCloseSidebar, query, searchData, setSearchData} = useContext(ContextProvider)

    document.body.className = mode ? 'bg-[#0f0f0f]' : ''

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/query");
        setSearchData(!searchData);
    };


  return (
    <div className={`${mode ? 'bg-[#0f0f0f]' : 'bg-white'} fixed flex items-center justify-between px-4 pt-2 pb-8 z-[60] w-full gap-3`}>
        <div className='flex gap-4 items-center'>
            <RxHamburgerMenu onClick={()=>setCloseSidebar(!closeSidebar)} size={37} className={`${mode ? 'text-white hover:bg-gray-200/10' : 'hover:bg-gray-200'} sm:block zero:hidden cursor-pointer p-[8px] rounded-full`} />
            <NavLink to='/'><img className='cursor-pointer min-w-[100px]' src={mode ? youtubeLogoLight : youtubeLogo} alt="Youtube Logo" /></NavLink>
        </div>
        <div className={`${mode ? 'bg-[#EBEBEB]/10 text-white' : 'bg-[#EBEBEB]'} flex items-center py-[12px] px-[23px] rounded-full w-[830px] justify-between`}>
            <form className='max-w-[720px]' onSubmit={handleSearch}>
                <input className='bg-transparent outline-none w-full' type="text" name='query' placeholder='Search' ref={query}/>
            </form>
            <FiSearch className='cursor-pointer min-w-[20px]'/>
        </div>
        <div className='flex gap-3 text-gray-500'>
            {mode ? <FiSun onClick={()=>setMode(!mode)} size={37} className={`${mode ? 'text-white hover:bg-gray-200/10' : 'hover:bg-gray-200'} cursor-pointer p-[8px] rounded-full`}/> : <HiOutlineMoon onClick={()=>setMode(!mode)} size={37} className='cursor-pointer hover:bg-gray-200 p-[8px] rounded-full'/>}
            <FiVideo size={37} className={`${mode ? 'text-white hover:bg-gray-200/10' : 'hover:bg-gray-200'} cursor-pointer zero:hidden nvr:block hover:bg-gray-200 p-[8px] w-[39px] rounded-full`}/>
            <IoMdNotificationsOutline size={37} className={`${mode ? 'text-white hover:bg-gray-200/10' : 'hover:bg-gray-200'} cursor-pointer zero:hidden nvr:block p-[8px] rounded-full`}/>
        </div>
    </div>
  )
}

export default Navbar