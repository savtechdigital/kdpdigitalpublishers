// // TypingText.jsx
// import React, { useEffect, useState } from 'react';

// const TypingText = ({ text, speed = 50 }) => {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText((prev) => prev + text[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, speed);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [text, speed]);

//   return <span className="text-sm mt-4 text-gray-300">{displayedText}</span>;
// };

// export default TypingText;