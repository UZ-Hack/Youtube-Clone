import { ContextProvider } from '../Context/GlobalContext';
import { useContext } from 'react'
import {SidebarItems} from '../../static/sidebarDatas'

const MobileSidebar = () => {

  const {mode, closeSidebar} = useContext(ContextProvider)
 
  return (
      <div className={`${mode ? 'bg-[#0a0a0a] text-white' : 'bg-slate-100'} ms:hidden zero:block fixed bottom-0 w-screen z-50 py-2`}>
          <ul className='flex gap-3 my-3 justify-between px-5'>
            {
              SidebarItems.SidebarTop.map((item, index) => {
                return (
                  <li key={index} className={`${mode ? 'hover:bg-gray-100/10' : 'hover:bg-gray-100'} flex gap-5 cursor-pointer hover:text-red-500 p-2 rounded-[10px] items-center select-none`}>
                    {item.icon} <span className={`${closeSidebar ? 'hidden' : 'sm:block zero:hidden'}`}>{item.name}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
  )
}

export default MobileSidebar