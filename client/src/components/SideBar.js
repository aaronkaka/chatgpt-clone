import React, { useState, useContext } from 'react'
// eslint-disable-next-line
import { MdClose, MdMenu, MdAdd, MdOutlineLogout, MdOutlineQuestionAnswer } from 'react-icons/md'
import { ChatContext } from '../context/chatContext'
import bot from '../assets/Logo_Horizontal.png'
import DarkMode from './DarkMode'
import SummarySource from './SummarySource'

/**
 * A sidebar component that displays a list of nav items and a toggle 
 * for switching between light and dark modes.
 * 
 * @param {Object} props - The properties for the component.
 */
const SideBar = () => {
  const [open, setOpen] = useState(true)
  const [, , clearMessages] = useContext(ChatContext)
  /**
   * Toggles the dark mode.
   */
  const clearChat = () => clearMessages()
  // const SignOut = () => {
  //   clearChat()
  //   window.sessionStorage.clear()
  // }

  return (
    <section className={` ${open ? "w-73" : "w-20 "} sidebar`}>
      <div className="sidebar__app-bar">
        <div className={`sidebar__app-logo ${!open && "scale-0 hidden"}`}>
          <span className='w-8 h-8'><img src={bot} alt="" width="60" /></span>
        </div>
        <h1 className={`sidebar__app-title ${!open && "scale-0 hidden"}`}>
          Source Content
        </h1>
        <div className='sidebar__btn-close' onClick={() => setOpen(!open)}>
          {open ? <MdMenu className='sidebar__btn-icon' /> : <MdClose className='sidebar__btn-icon' />}
        </div>
      </div>
      <div className="nav">
        <span className='nav__item  bg-light-white' onClick={clearChat}>
          <div className='nav__icons'>
            <MdAdd />
          </div>
          <h1 className={`${!open && "hidden"}`}>New chat</h1>
        </span>
      </div>

      <div className="nav">
        <span>
          <div className='text-xs text-sky-400'>
          {open && SummarySource().sourceText.length < 5001 && SummarySource().sourceText.slice(0, 5000)}
          </div>
        </span>
      </div>

      <div className="nav__bottom">
        <DarkMode open={open} />
        {/* <div className="nav">
          <a href='https://github.com/EyuCoder/chatgpt-clone' className="nav__item">
            <div className="nav__icons">
              <MdOutlineQuestionAnswer />
            </div>
            <h1 className={`${!open && "hidden"}`}>Update & FAQ</h1>
          </a>
        </div>
        <div className="nav">
          <span className="nav__item" onClick={SignOut}>
            <div className="nav__icons">
              <MdOutlineLogout />
            </div>
            <h1 className={`${!open && "hidden"}`}>Log out</h1>
          </span>
        </div> */}
      </div>
    </section >
  )
}

export default SideBar