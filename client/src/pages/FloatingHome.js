import FloatingChat from '../components/FloatingChat';
import Avatar from '../components/Avatar/Avatar';
import React from 'react'
import PearsonSource from '../components/PearsonSource';
import logo from '../assets/Logo_Horizontal.png'

const FloatingHome = () => {
  return (
    <div className="flex transition duration-500 ease-in-out">
      <div><img src={logo} alt="" width="100" height="100" /> Source Content
      <br /><br />
      {PearsonSource().paragraph1}
      <br /><br />
      {PearsonSource().paragraph2}
      <br /><br />
      {PearsonSource().paragraph3}
      </div>
      <Avatar />
      <FloatingChat />
    </div>
  )
}

export default FloatingHome
