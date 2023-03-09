import React, { useState } from "react";

import { motion } from "framer-motion";

import { IoMdCloseCircleOutline } from "react-icons/io";

import "./Avatar.scss";

const Avatar = (showDialog = true, scale = 1) => {
  scale = 1;

  const [show, setShow] = useState(true);

  return (
    <div style={{ display: show ? 'initial' : "none" }}>
      <motion.div
        className="container"
        initial={{ rotate: 180 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <div style={{ transform: `scale(${scale})` }}>
          <div className="container">
            <div id="Page1"></div>
            <div className="face-container">
              <div className="hair-left"></div>
              <div className="bangs-left"></div>
              <div className="bangs-middle"></div>
              <div className="bangs-right"></div>
              <div className="face">
                <div className="left-eyebrow"></div>
                <div className="left-eye">
                  <div className="pupil"></div>
                </div>
                <div className="right-eyebrow"></div>
                <div className="right-eye">
                  <div className="pupil"></div>
                </div>
                <div className="nose"></div>
                <div className="lips"></div>
              </div>
              <div className="hair-right"></div>
            </div>
            <div style={{ display: showDialog ? "flex" : "none" }} className="dialogue"></div>
            <button onClick={() => {
              setShow(false);
            }}
              className="w-8 h-8 relative rounded-full" style={{ top: -100, left: -8 }}><IoMdCloseCircleOutline className="w-10 h-10" style={{ margin: "auto", color: "#154c79" }} /></button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Avatar;
