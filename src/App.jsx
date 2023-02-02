import { useState, useEffect } from 'react'
import './App.css'
import "./style/colors.css"
import "./style/fonts.css"
import efjm from "./images/efjm_logo.png"

function App() {
  const INITIAL = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  const [countdown, setCountdown] = useState(INITIAL);
    let countDownDate = new Date("Mar 1, 2023 09:00:00").getTime();
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
          <img src={efjm} width="100px" alt="die leude habns drauf" />
          <h1 className="c-A100">
            {countdown.days +"d "}
            {countdown.hours +"h "}
            {countdown.minutes +"m "}
            {countdown.seconds + "s "}
          </h1>
          <h2 className="c-A100">It is time!</h2>
        </div>
      </div>
    )
  }

export default App
