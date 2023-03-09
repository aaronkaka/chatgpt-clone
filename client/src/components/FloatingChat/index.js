import React, { useState } from "react";

import ChatBubbleIcon from "../../assets/chat-bubble-icon.svg";
import Popper from "./components/Popper";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && <Popper />}
      <button title="Contact Sale"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed z-90 bottom-10 right-8 bg-blue-400 w-24 h-24 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-500 hover:drop-shadow-2xl duration-300">
        <img src={ChatBubbleIcon} className="w-16 h-16" />
      </button>
    </div>
  )
}

export default FloatingChat;
