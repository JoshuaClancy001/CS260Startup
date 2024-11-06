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

export default function App() {
  return (
    <BrowserRouter>
        <div>
        <header>
            <h1 className="title">JamPlan</h1>
            <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>JJC123</h3>
            <div className="logpage-nav">
            <nav>
                <menu>
                <li>
                    <NavLink className='nav-item' to='logpage'>
                        Home 
                    </NavLink>
                </li>
                <li>
                <NavLink className='nav-item' to='scoreboard'>
                        Scoreboard
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav-item' to='friendslist'>
                        FriendsList
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav-item' to=''>
                        Logout
                    </NavLink>
                </li>
                </menu>
            </nav>
            </div>
        </header>

        <Routes>
            <Route path='/logpage' element={<Logpage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/scoreboard' element={<Scoreboard />} />
            <Route path='/friendslist' element={<Friendslist />} />
            <Route path='/googledrive' element={<GoogleDrive />} />
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