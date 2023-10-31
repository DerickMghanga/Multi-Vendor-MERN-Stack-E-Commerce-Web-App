import React, { useEffect } from 'react'
import Login from '../components/Login/Login.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state)=> state.user);

  useEffect(()=> {    //if user already logged in No need to visit login page
    if (isAuthenticated === true){
      navigate('/');    
    }
  }, [])

  return (
    <div className='bg-gray-200'>
        <Login />
    </div>
  )
}

export default LoginPage;
