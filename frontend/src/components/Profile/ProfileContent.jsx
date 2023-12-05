import React, { useState } from 'react'
import { backend_url } from '../../server'
import { useSelector } from 'react-redux';
import { AiOutlineCamera } from 'react-icons/ai';
import styles from '../../styles/styles';
import AllOrders from './AllOrders'
import AllRefundOrders from './AllRefundOrders'
import TrackOrder from './TrackOrder'
import PaymentMethod from './PaymentMethod'
import Address from './Address.jsx'

const ProfileContent = ({ active }) => {

  const { user } = useSelector((state) => state.user);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='w-full'>

      {/* Profile display */}
      {
        active === 1 && (
          <>
            <div className='flex justify-center w-full'>
              <div className="relative">
                <img src={`${backend_url}${user?.avatar}`}   //express.static >> check backend/app.js
                  alt="avatar"
                  className='w-[150px] h-[150px] rounded-full border-[2px] border-lime-600'
                />
                <div className='absolute w-[32px] h-[32px] bg-white border border-gray-400 rounded-full flex items-center justify-center cursor-pointer bottom-[5px] right-[5px]'>
                  <AiOutlineCamera size={22} />
                </div>
              </div>
            </div>

            <br/>
            <br/>

            <div className="w-full px-5">
              <form onSubmit={handleSubmit} aria-required={true}>
                <div className="w-full block sm:flex pb-3">
                  <div className='w-full sm:w-[50%]'>
                    <label className="block pb-1 font-semibold">
                      Full Name
                    </label>
                    <input type='text' required className={`${styles.input} !w-[95%] focus:outline-none`}
                      value={name} onChange={(e)=> setName(e.target.value)}
                    />
                  </div>

                  <div className='w-full sm:w-[50%]'>
                    <label className="block pb-1 font-semibold">
                      Email Address
                    </label>
                    <input type='text' required className={`${styles.input} !w-[95%] focus:outline-none`}
                      value={email} onChange={(e)=> setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="w-full block sm:flex pb-3">
                  <div className='w-full sm:w-[50%]'>
                    <label className="block pb-1 font-semibold">
                      Phone Number
                    </label>
                    <input type='tel' required className={`${styles.input} !w-[95%] focus:outline-none`}
                      value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className='w-full sm:w-[50%]'>
                    <label className="block pb-1 font-semibold">
                      ZIP Code
                    </label>
                    <input type='text' required className={`${styles.input} !w-[95%] focus:outline-none`}
                      value={zipCode} onChange={(e)=> setZipCode(e.target.value)}
                    />
                  </div>
                </div>

                <div className="w-full block sm:flex pb-3">
                  <div className='w-full sm:w-[50%]'>
                    <label className="block pb-1 font-semibold">
                      Address 1
                    </label>
                    <input type='address' required className={`${styles.input} !w-[95%] focus:outline-none`}
                      value={address1} onChange={(e)=> setAddress1(e.target.value)}
                    />
                  </div>

                  <div className='w-full sm:w-[50%]'>
                    <label className="block pb-1 font-semibold">
                      Address 2
                    </label>
                    <input type='address' required className={`${styles.input} !w-[95%] focus:outline-none`}
                      value={address2} onChange={(e)=> setAddress2(e.target.value)}
                    />
                  </div>
                </div>

                <div className='flex justify-center'>
                  <input type="submit" value="Update" required
                    className='btn-secondary'
                  />
                </div>
              </form>
            </div>

          </>
        )
      }

      {/* Order display */}
      {
        active === 2 && (
          <div>
            <AllOrders />
          </div>
        )
      }

      {/* Refunds display */}
      {
        active === 3 && (
          <div>
            <AllRefundOrders />
          </div>
        )
      }

      {/* Track Order display */}
      {
        active === 5 && (
          <div>
            <TrackOrder />
          </div>
        )
      }

      {/* Payment methods display */}
      {
        active === 6 && (
          <div>
            <PaymentMethod />
          </div>
        )
      }

      {/* Address display */}
      {
        active === 7 && (
          <div>
            <Address />
          </div>
        )
      }

    </div>
  )
}

export default ProfileContent