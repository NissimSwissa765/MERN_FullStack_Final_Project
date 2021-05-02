import './App.css';
import Login from './components/login'
import MainPage from './components/mainPage';
import {Auth} from './authenticate.js'
import { useEffect } from 'react';
import { useState } from 'react';


function App() 
{
  let [auth, setAuth] = useState(false)
  
  let checkAuth = async () =>
  {
     setAuth(await Auth())
  }
  
  useEffect(()=>{
    checkAuth()
  },[])

  return (
    <div>

          {!auth && <>
          <Login/>
          </>
          }
          {auth && <>
          <MainPage/>
          </>
          }
      
    </div>
  );
}

export default App;