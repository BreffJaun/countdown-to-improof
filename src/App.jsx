import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const INITIAL = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  const [countdown, setCountdown] = useState(INITIAL);
  
  let countDownDate = new Date("Mar 9, 2023 09:00:00").getTime();
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  
  useEffect(() => {
    let x = setInterval(function() {
      setCountdown({...countdown, 
        days:days,
        hours:hours,
        minutes:minutes,
        seconds:seconds
      })
    }, 1000);
    return () => clearInterval(x);

  }, [countdown]);

    return (
      <div className="App">
        <div className='countdown'>
          <span>{countdown.days +"d "}</span>
          <span>{countdown.hours +"h "}</span>
          <span>{countdown.minutes +"m "}</span>
          <span>{countdown.seconds +"s "}</span>
        </div>
        <div>
          <p>...until to "improof" yourself</p>
        </div>
      </div>
    )
  }

export default App
