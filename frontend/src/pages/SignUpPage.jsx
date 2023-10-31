import React, { useEffect } from 'react'
import Signup from '../components/Signup/Signup.jsx';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {

  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state)=> state.user);

  useEffect(()=> {    //if user already logged in No need to visit signup page
    if (isAuthenticated === true){
      navigate('/');    
    }
  }, [])

  return (
    <div className='bg-gray-200'>
        <Signup/>
    </div>
  )
}

export default SignUpPage