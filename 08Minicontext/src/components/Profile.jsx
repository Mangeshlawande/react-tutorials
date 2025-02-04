import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


//useContext : take access directly

function Profile() {
    const {user} = useContext(UserContext)// to pick data from usercontext
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile

/**
 *  Profile file to send the data ;
 * to extract data (data lete kaise hai )
 */