import React from 'react'
import { backend_url } from '../../server'
import { useSelector } from 'react-redux';
import { AiOutlineCamera } from 'react-icons/ai';

const ProfileContent = ({active}) => {

  const { user } = useSelector((state) => state.user);

  return (
    <div className='w-full'>

      {/* Profile Page */}
      {
        active === 1 && (
          <div className='flex justify-center w-full'>
            <div className="relative">
              <img src={`${backend_url}${user?.avatar}`}   //express.static >> check backend/app.js
                  alt="avatar"
                  className='w-[150px] h-[150px] rounded-full border-[2px] border-lime-600'
              />
              <div className='absolute w-[32px] h-[32px] bg-white border border-gray-400 rounded-full flex items-center justify-center cursor-pointer bottom-[5px] right-[5px]'>
                <AiOutlineCamera size={22} />
              </div>
             

              <div className="w-full px-5">
                <form>
                  <div className="w-full flex pb-3">
                    <label className="block pb-2">
                      Full Name:
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProfileContent