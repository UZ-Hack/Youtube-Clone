import { ContextProvider } from '../Context/GlobalContext';
import { useContext, useState } from 'react'
import {SidebarItems} from '../../static/sidebarDatas'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false)

  const {mode, closeSidebar} = useContext(ContextProvider)
 
  return (
      <div className={`${mode ? 'bg-[#0f0f0f] text-white' : ''} fixed top-0 h-full w-[250px] ms:flex zero:hidden content-center pt-20 pb-7 px-4 z-30`}>
        <div className={`${mode ? 'text-gray-200' : 'text-gray-500'} flex flex-col`}>
          <ul className='flex flex-col gap-3 my-3'>
            {
              SidebarItems.SidebarTop.map((item, index) => {
                return (
                  <NavLink key={index} to={item.to}><li className={`${mode ? 'hover:bg-gray-100/10' : 'hover:bg-gray-100'} flex gap-5 cursor-pointer hover:text-red-500 p-2 rounded-[10px] items-center select-none`}>
                    {item.icon} <span className={`${closeSidebar ? 'hidden' : 'sm:block zero:hidden'}`}>{item.name}</span>
                  </li></NavLink>
                )
              })
            }
          </ul>

          <hr className='border-gray-500' />

          <ul className='flex flex-col gap-3 my-3'>
            {
              SidebarItems.SidebarMiddle.map((item, index) => {
                return (
                  <NavLink key={index} to={item.to}><li className={`${mode ? 'hover:bg-gray-100/10' : 'hover:bg-gray-100'} flex gap-5 cursor-pointer hover:text-red-500 p-2 rounded-[10px] items-center select-none`}>
                    {item.icon} <span className={`${closeSidebar ? 'hidden' : 'sm:block zero:hidden'}`}>{item.name}</span>
                  </li></NavLink>
                )
              })
            }
          </ul>

          <hr className='border-gray-500' />

          <ul className={`${showMore ? 'h-auto mt-3' : 'h-0'} overflow-hidden flex flex-col gap-3`}>
            {
              SidebarItems.SidebarExplore.map((item, index) => {
                return (
                  <NavLink key={index} to={item.to}><li className={`${mode ? 'hover:bg-gray-100/10' : 'hover:bg-gray-100'} flex gap-5 cursor-pointer hover:text-red-500 p-2 rounded-[10px] items-center select-none`}>
                    {item.icon} <span className={`${closeSidebar ? 'hidden' : 'sm:block zero:hidden'}`}>{item.name}</span>
                  </li></NavLink>
                )
              })
            }
          </ul>

          <span onClick={() => setShowMore(!showMore)} className={`${mode ? 'hover:bg-gray-100/10' : 'hover:bg-gray-100'} my-3 flex items-center gap-2 cursor-pointer p-2 rounded-[10px] select-none`}>{showMore ? <IoIosArrowDown className='rotate-180' /> : <IoIosArrowDown />} <span className={`${closeSidebar ? 'hidden' : 'sm:block zero:hidden'}`}>{!showMore ? 'Show more' : 'Hide'}</span></span>
        </div>
        </div>
  )
}

export default Sidebar