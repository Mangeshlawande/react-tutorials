import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    // jo bhi props aate hai unko as it is use kr lo 
    const [user, setUser] = React.useState(null);// store the value ,to update the value use setUser method
    return(// provider =  wrapping 
        <UserContext.Provider value={{user, setUser}}>// value ka access pass kr diya
        {children}
        {/* // components ko as it render kar diya  */}
        </UserContext.Provider>
    )
}

export default UserContextProvider

/**
 * fragments placed on top which can access all elements/components. 
 * 
 */