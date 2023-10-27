import React, { useEffect, useState } from 'react'

const CountDown = () => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(()=> {
        const timer = setTimeout(()=> {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });   //Deepndency removed in the useEffect hook


    function calculateTimeLeft() {
      const difference = +new Date('2023-10-29') - +new Date()

      let timeleft = {};

      if (difference > 0) {
        timeleft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),  //convert to days
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),  // remainder = hours
          minutes: Math.floor((difference / (1000 * 60))  % 60), // remainder = minutes
          seconds: Math.floor((difference / (1000)) % 60), // remainder = seconds
        }
      };

      return timeleft;
    }

    const timerComponents = Object.keys(timeLeft).map((key, index) => {
      if (!timeLeft[key]) {   //if timeleft is zero
        return null;

      } else {
        return (
          <span className='text-[25px] text-[#475ad2]' key={index}>
            {timeLeft[key]} {key} {" "}  
          </span>
        )
      }
    })


    
  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className='text-[red] text-[25px]'>
          Time is up!
        </span>
      )}
    </div>
  )
}

export default CountDown