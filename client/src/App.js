// import Home from './pages/Home'
import FloatingHome from './pages/FloatingHome'
import { ChatContextProvider } from './context/chatContext'

const App = () => {
  return (
    <ChatContextProvider>
      <FloatingHome />
    </ChatContextProvider >
  )
}


export default App
