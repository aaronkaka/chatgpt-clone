import FloatingChat from '../components/FloatingChat';
import Avatar from '../components/Avatar/Avatar';
import React from 'react'
import { motion } from "framer-motion";

const FloatingHome = () => {
  return (
    <div className="flex transition duration-500 ease-in-out">
      <div>THIS IS EXAMPLE CONTENT</div>
      <Avatar />
      <FloatingChat />
    </div>
  )
}

export default FloatingHome
