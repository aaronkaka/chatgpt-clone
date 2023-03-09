import FloatingChat from '../components/FloatingChat';
import Avatar from '../components/Avatar/Avatar';
import React from 'react'
import PearsonSource from '../components/PearsonSource';
import logo from '../assets/PearsonLogo.jpg'

const FloatingHome = () => {
  return (
    <div className="flex transition duration-500 ease-in-out ml-4 mr-4">
      <div>
      <blockquote className="font-semibold text-gray-900 dark:text-white">
      <img src={logo} alt="Pearson" width="100" />
      <svg aria-hidden="true" className="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
      <p className="indent-8">{PearsonSource().paragraph1}</p>
      <br />
      <p className="indent-8">{PearsonSource().paragraph2}</p>
      <br />
      <p className="indent-8">{PearsonSource().paragraph3}</p>
      </blockquote>
      </div>
      <Avatar />
      <FloatingChat />
    </div>
  )
}

export default FloatingHome
