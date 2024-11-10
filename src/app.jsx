import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Logpage } from './logpage/logpage'
import { Messagepage } from './messagepage/messagepage'
import { Register } from './register/register'
import { Scoreboard } from './scoreboard/scoreboard'
import { Friendslist } from './friendslist/friendslist'
import { Home } from './home/home';
import { GoogleDrive } from './googledrive/googledrive';
import './app.css';
import { AuthState } from './login/authState';

export default function App() {

    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '')
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    const onLogout = () => {
        setUserName(''); // Clear userName
        setAuthState(AuthState.Unauthenticated); // Set auth state to unauthenticated
        localStorage.removeItem('userName'); // Optionally remove userName from localStorage
    }


  return (
    <BrowserRouter>
        <div>
        <header>
            <h1 className="title">JamPlan</h1>
            <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>JJC123</h3>
            <div className="logpage-nav">
            <nav>
                <menu>
                    { authState == AuthState.Authenticated && (
                <li>
                    <NavLink className='nav-item' to='logpage'>
                        Home 
                    </NavLink>
                </li>)
                    }
                    {authState == AuthState.Authenticated && (
                <li>
                <NavLink className='nav-item' to='scoreboard'>
                        Scoreboard
                    </NavLink>
                </li>)
                    }
                    { authState == AuthState.Authenticated && (
                <li>
                    <NavLink className='nav-item' to='friendslist'>
                        UsersList
                    </NavLink>
                </li>)
                    }
                    { authState == AuthState.Authenticated && (
                <li>
                    <NavLink className='nav-item' to='' onClick={onLogout}>
                        Logout
                    </NavLink>
               </li>)
                }
                </menu>
            </nav>
            </div>
        </header>

        <Routes>
            <Route path='/logpage' element={<Logpage onLogut={(loginUserName) => {onAuthChange(loginUserName,AuthState.Unauthenticated)}}/>} />
            <Route path='/login' element={<Login 
                userName = {userName}
                authState = {authState}
                onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
                }}
                onLogin={(loginUserName) => {onAuthChange(loginUserName,AuthState.Authenticated)}}
            />} />
            <Route path='/register' element={<Register
                userName = {userName}
                authState = {authState}
                onAuthChange={(userName, authState) => {
                    setAuthState(authState);
                    setUserName(userName);
            }} 
                onLogin={(loginUserName) => {onAuthChange(loginUserName,AuthState.Authenticated)}}
            />} />
            <Route path='/scoreboard' element={<Scoreboard />} />
            <Route path='/friendslist' element={<Friendslist />} />
            <Route path='/googledrive' element={<GoogleDrive />} />
            <Route path='/messagepage' element={<Messagepage />} />
            <Route path='/' element={<Home/>} exact />
            <Route path='*' element={<NotFound />} />

        </Routes>

        <footer>
            <div className="index-footer">
            <span className="author-name">Josh Clancy</span>
            <a href="https://github.com/JoshuaClancy001/startup" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }