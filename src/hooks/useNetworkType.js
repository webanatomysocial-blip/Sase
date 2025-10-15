// // src/hooks/useNetworkType.js
// import { useState, useEffect } from 'react';

// export const useNetworkType = () => {
//   const [networkType, setNetworkType] = useState('unknown');

//   useEffect(() => {
//     if ('connection' in navigator) {
//       const connection = navigator.connection;
//       setNetworkType(connection.effectiveType || 'unknown');

//       const handleChange = () => setNetworkType(connection.effectiveType || 'unknown');
//       connection.addEventListener('change', handleChange);
//       return () => connection.removeEventListener('change', handleChange);
//     } else {
//       // Fallback: Assume slow network for safety
//       setNetworkType('slow-2g');
//     }
//   }, []);

//   return networkType;
// };