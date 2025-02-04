
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
function App() {
  

  return (
    // or used as  <UserContext.Provider></UserContext.Provider>
    <UserContextProvider> 
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
