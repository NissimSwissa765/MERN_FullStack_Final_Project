import {useState} from 'react'
import { getToken } from '../authenticate.js'
import { Button, AppBar, Toolbar, Paper, Link } from '@material-ui/core'

function Login(props) 
{
    let [loginFailed, setLoginFailed] = useState(false)

    let saveToStorage = (data) =>
    {
        if(!data.token)
        {
            setLoginFailed(true)
        }
        else
        {
            setLoginFailed(false)
            window.location.reload()
        }
        sessionStorage['token'] = data.token
        sessionStorage['name'] = data.name
    }


    let [credentials, setCredentials] = useState({username: '', password: ''})

    return (
        <div className={'MainDiv'}>
           <AppBar className={'AppBar'}>
             <Toolbar>
               <h2>Movies Subscriptions</h2>
             </Toolbar>
           </AppBar>
           <Paper className={'Paper'}>
           <h3>Login System</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Username:</td> 
                        <td><input type="text" onChange={u => setCredentials({...credentials, username: u.target.value})}/></td>
                    </tr>
                    <tr>
                        <td>Password:</td> 
                        <td><input type="password" onChange={p => setCredentials({...credentials, password: p.target.value})}/></td>
                    </tr>
                </tbody>
            </table>    
            <Link to='/movies/all'>
                <Button className={'LOGOIN'} variant="contained" color='primary' onClick={async ()=>{saveToStorage(await getToken(credentials))}}>Login</Button>
            </Link>
            <p hidden={!loginFailed} style={{color: 'red'}}>Login Failed, Try Again</p>
           </Paper>
           
         </div>
  );
}

export default Login;
