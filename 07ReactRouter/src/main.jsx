import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children :[
//       {path:'',
//         element: <Home/>
//       },
//       {path:"About",
//         element:<About/>
//       },
//       {path:"Contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])


// /about/chai


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
      <Route path="About" element={<Home />}>
      <Route path ='chai'/>
      </Route>
      <Route path="Contact" element={<Contact />}/>
      <Route path="User/:userid" element={<User />}/>
      <Route 
      loader={githubInfoLoader}
      path="Github" 
      element={<Github />}/>
{/* for user have no path in main menu, data comes on the basis of ids */}
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
