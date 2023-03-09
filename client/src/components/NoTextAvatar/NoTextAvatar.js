import React from "react";

import "./NoTextAvatar.scss";

const NoTextAvatar = (showDialog = true, scale = 1) => {
  scale = 0.2;
  return (
    <div className="noTextAvatar m-10" style={{ transform: `scale(${scale})` }}>
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
      </div>
    </div>
  )
}

export default NoTextAvatar;
