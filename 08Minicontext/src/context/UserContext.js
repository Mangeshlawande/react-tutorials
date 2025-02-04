// Pure javascript is present
import React from 'react'

const UserContext = React.createContext()

export default UserContext;

/**
 * context is global variable 
 * context ke sath ek provider bhi banana padta hai 
 * can wrap all content in this provider
 * <UserContext>
 * <Login/> sare components user components ke throught direct access le sakte hai 
 * <Card>
 * <Data/>
 * </Card>
 * <Footer/>
 * </UserContext>
 * 
 * ++++
 *  * context ke sath ek provider bhi banana padta hai 
there are 2 way to create 
 */