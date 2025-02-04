import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)// helps to fetch value from UserContext
    // to give proper context 

    const handleSubmit = (e) => {
        e.preventDefault()// on bydefault submit value spreads anywhere to prevents this use this method
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}// control the state 
        onChange={(e) => setUsername(e.target.value) }// update the state
        placeholder='username'  />
        {" "}
        <input type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

/**
 * Login file to access the data 
 *  used for data sending
 */