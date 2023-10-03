import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import styles from '../../styles/styles';
import {Link} from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-10 sm:px-6 lg:px-8'>

      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-4 text-center text-xl font-bold text-gray-900'>
          Login to your account
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email Address
              </label>
              <div className="mt-1">
                <input type='email' name='email' autoComplete='email' required
                  value={email} onChange={(e)=>setEmail(e.target.value)}
                  placeholder='Email'
                  className='appearance-none w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:border-blue-500'
                />
              </div>
            </div>

            <div className='mt-6'>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                Enter your Password
              </label>
              <div className="mt-1 relative">
                <input type={visible ? 'text' : 'password'} name='password' autoComplete='current-password' required
                  value={password} onChange={(e)=>setPassword(e.target.value)}
                  placeholder='Password'
                  className='appearance-none w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:border-blue-500'
                />
                
                {
                  visible ? (
                    <AiOutlineEye
                      className='absolute right-2 top-2 cursor-pointer'
                      size={22} onClick={()=> setVisible(false)}
                    />
                  ):(
                    <AiOutlineEyeInvisible
                      className='absolute right-2 top-2 cursor-pointer'
                      size={22} onClick={()=> setVisible(true)}
                    />
                  )
                }
              </div>
            </div>

            <div className={`${styles.normalFlex} justify-between mt-2`}>
              <div className={`${styles.normalFlex}`}>
                <input type="checkbox" name='remember-me' id='remember-me'
                  className='h-4 w-4 text-blue-600 border border-gray-300 rounded mt-1'
                />
                <label htmlFor="remember-me"
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember me.
                </label>
              </div>

              <div>
                <a href='/forgot-password' className='text-blue-600 text-sm'>
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className='flex justify-center mt-4'>
              <button type='submit' 
                className='group relative bg-blue-500 cursor-pointer h-[35px] px-3 rounded-md border border-transparent text-sm'
              >
                Login
              </button>
            </div>

            <div className={`${styles.normalFlex} w-full gap-3 mt-3 text-sm`}>
              <h4>Don't have an account?</h4>

              <Link to='/signup' className="text-blue-600">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;