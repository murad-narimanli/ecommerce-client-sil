// import React, { useEffect, useState } from "react";

// const CountdownClock = () => {
//   const [hours, setHours] = useState(24);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (hours === 0 && minutes === 0 && seconds === 0) {
//         clearInterval(interval);
//         // do something when the countdown is complete
//       } else if (minutes === 0 && seconds === 0) {
//         setHours((hours) => hours - 1);
//         setMinutes(59);
//         setSeconds(59);
//       } else if (seconds === 0) {
//         setMinutes((minutes) => minutes - 1);
//         setSeconds(59);
//       } else {
//         setSeconds((seconds) => seconds - 1);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [hours, minutes, seconds]);

//   return (
//     <div>
//       {hours.toString().padStart(2, "0")}:{minutes
//         .toString()
//         .padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
//     </div>
//   );
// };
// export default CountdownClock;
