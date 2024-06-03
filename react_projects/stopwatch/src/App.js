import React, { useState, useEffect } from 'react'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval; // to store interval ID

    // effect to handle the stopwatch functionality
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10) //increase time by 10ms
      }, 10); //update time every 10s
    } else if (!running) {
      clearInterval(interval) //clear interval to stop updating time
    }
    // clean up function to clear interval when running state change
    return () => clearInterval(interval);

  }, [running])

  return (
    <center>
      <div>
        <h1>Stop Watch</h1>
        <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
        {/* time is in ms > to convert it to minutes (60*1000) */}
        {/* % 60 takes the remainder of the minutes divided by 60, ensuring we only display minutes in the range of 0 to 59. */}
        {/* ("0" + ...) concatenates a leading "0" to the minutes value to ensure it is always two digits long */}
        <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
        {/* converts the time to seconds by dividing it by 1000 */}
        <span>{("0" + ((time / 10) % 100))}</span>
      </div>


      <div>
        {/* conditional rendering bsed on running state*/}
        {running ? (
          <button onClick={() => { setRunning(false) }}>Stop</button>
        ) : (
          <button onClick={() => { setRunning(true) }}>Start</button>
        )}
        <button onClick={() => { setTime(0) }}>Reset</button>
      </div>
    </center>
  )
}

export default App