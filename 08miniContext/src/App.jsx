import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {

  return (              // You can do that procedure which you have done in the UserConetxtProvider.jsx like
                        // Givng the props in the UserContextProvider = { value ={user, setUser}}
                        // You can do directly here without making the Usercontextpovider Component
    <UserContextProvider>
     <h1>React and Context API</h1>
     <Login />
     <Profile/>
    </UserContextProvider>
  )
}

export default App
