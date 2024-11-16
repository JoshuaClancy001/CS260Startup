import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './login.css';

export function Authenticated(props) {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const [password, setPassword] = React.useState(localStorage.getItem('password') || '');
  const [token, setToken] = React.useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  async function logout() {
    const response = await fetch(`/api/auth/logout`, {
      method: 'post',
      body: JSON.stringify({ name: userName, password: password, token: token }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200){
      localStorage.setItem('userName', userName);
      props.onAuthChange(userName, AuthState.Authenticated);
      navigate('/logpage');
    }
    else{
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }


    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/logpage')}>
        Play
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}