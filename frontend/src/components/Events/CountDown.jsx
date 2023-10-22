import React, { useEffect, useState } from 'react'

const CountDown = () => {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(()=> {
        const timer = setTimeout(()=> {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    function calculateTimeLeft() {
        
    }

  return (
    <div>

    </div>
  )
}

export default CountDown