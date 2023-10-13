import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { server } from '../server';
import axios from 'axios';
import { toast } from 'react-toastify';

const ActivationPage = () => {
    const  activation_token = useParams();
    // console.log(activation_token.activation_url);

    const token = activation_token.activation_url;

    const [error, setError] = useState(false);

    useEffect(() => {
        if (token) {
            const activationEmail = async() => {
                    await axios.post(`${server}/user/activation`, {token})
                    .then((res) => {
                        // console.log(res.data);
                        if(res.data.success === true) {
                            setError(false);
                            toast.success('Account activated successfully!👍');
                        }
                    })
                    .catch((err) => {
                        // console.log(err)
                        // setError(true);
                    })
                    
            }

            activationEmail();  //call the function
        }
    }, [token]);
    
  return (
    <div className='w-full h-screen flex justify-center items-center p-2'>
        {
            error ? (
                <p>Token is Expired, Try to Signup again</p>
            ) : (
                <p>Your account has been activated successfully.
                    <Link to='/login' className='text-blue-400 ml-1 underline'>
                        Login
                    </Link>
                </p>
            )
        }
    </div>
  )
}

export default ActivationPage;