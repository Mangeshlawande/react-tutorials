import {useDispatch}  from 'react-redux';
import {useState, useEffect} from 'react';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';
import './App.css'
import { Footer, Header } from './components';
import {Outlet } from 'react-router-dom'

function App() {
// console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    } )
    .finally(() => setLoading(false))
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap
    content-between bg-gray-400'> 
    <div className='width-full block'>
    <Header />
    <main>
      TODO: 
      <Outlet />
    </main>
    <Footer />


    </div>
    </div>
  ) : null 
};

export default App


// env variable :  system variables 
// must put project root 