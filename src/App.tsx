import UserProvider from './contexts/UserContext'
import { useContext, useEffect } from 'react'
import { UserContext } from './contexts/UserContext'
import './App.css'

function UserDetails() {
  const { user } = useContext(UserContext)
  return (
    <>
      <p>User Name: {user.name}</p>
      <p>User Email: {user.email}</p> 
    </>
  )
}

function AnotherComponent() 
{
  const { user, setUser } = useContext(UserContext)
  
  useEffect(() =>  {
    setUser({
      name: 'Mike Odnis',
      email: 'mikeodnis3242004@gmail.com',
    })
  }, [])
  return (
    <>
      <p>
        See other component
      </p>
    </>
  )
}

function App() {
  return (
    <UserProvider>
      <UserDetails/>
      <AnotherComponent/>
    </UserProvider>
  )
}

export default App
