import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {RxAvatar} from 'react-icons/rx';
import styles from '../../styles/styles';
import {Link} from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [avatar, setAvatar] = useState(null);

    const handleSubmit = () => {

    }

    //upload image file for avatar
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center py-10 sm:px-6 lg:px-8'>

        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <h2 className='mt-4 text-center text-xl font-bold text-gray-900'>
            Register as a new User
            </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                <form>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                            Full Name
                        </label>
                        <div className="mt-1">
                            <input type='text' name='text' autoComplete='name' required
                            value={name} onChange={(e)=>setName(e.target.value)}
                            placeholder='Full Name'
                            className='appearance-none w-full border border-gray-300 rounded-md p-1 shadow-sm focus:outline-none focus:border-blue-500'
                            />
                        </div>
                    </div>

                    <div className='mt-6'>
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

                    <div className='mt-6'>
                        <div className='mt-2 flex items-center'>
                            <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                                {
                                    avatar ? (
                                        <img src={URL.createObjectURL(avatar)} alt='avatar' 
                                            className='h-full w-full object-cover rounded-full'
                                        />
                                    ) : (
                                        <RxAvatar className='h-8 w-8' />
                                    )
                                }
                            </span>

                            <label htmlFor="file-input"
                                className='ml-5 text-sm text-gray-700 font-semibold flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm cursor-pointer'
                            >
                                <span>Upload a file</span>
                                <input type='file' name='avatar' id='file-input' accept='.jpg,.jpeg,.png'
                                    onChange={handleFileInputChange}
                                    className='sr-only'
                                />
                            </label>
                        </div>
                    </div>

                    <div className='flex justify-center mt-6'>
                        <button type='submit' 
                            className='group relative bg-blue-500 font-bold cursor-pointer h-[35px] w-full rounded-md border border-transparent text-sm'
                        >
                            Signup
                        </button>
                    </div>

                    <div className={`${styles.normalFlex} w-full gap-3 mt-3 text-sm`}>
                        <h4>Already have an account?</h4>

                        <Link to='/login' className="text-blue-600">Login</Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Signup