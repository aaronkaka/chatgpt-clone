import React from "react";

import ChatView from "../../ChatView";

const Popper = () => {
  return (
    <div id="dropdown" className="fixed z-90 bottom-36 rounded-xl right-8 bg-white divide-y divide-gray-100 shadow w-1/2 h-1/2 dark:bg-gray-700">
      <ChatView />
    </div>
  )
}

export default Popper;
