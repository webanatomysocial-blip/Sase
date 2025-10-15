// // src/hooks/useNetworkSpeed.js
// import { useState, useEffect } from 'react';

// export const useNetworkSpeed = () => {
//   const [speedMbps, setSpeedMbps] = useState(null); // null = loading
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     console.log('useNetworkSpeed: Initializing'); // Debug
//     if ('connection' in navigator) {
//       const { effectiveType } = navigator.connection;
//       console.log('useNetworkSpeed: Detected effectiveType:', effectiveType); // Debug

//       // Map effectiveType to speed (Mbps)
//       const speedMap = {
//         'slow-2g': 0.1, // ~100 Kbps
//         '2g': 0.3, // ~300 Kbps
//         '3g': 1, // ~1 Mbps (matches Slow 3G)
//         '4g': 25, // ~25 Mbps
//       };

//       if (effectiveType in speedMap) {
//         console.log('useNetworkSpeed: Mapped speed:', speedMap[effectiveType], 'Mbps'); // Debug
//         setSpeedMbps(speedMap[effectiveType]);
//         setIsLoading(false);
//       } else {
//         console.log('useNetworkSpeed: Unknown effectiveType, assuming slow (1 Mbps)'); // Debug
//         setSpeedMbps(1); // Default to slow to ensure LightLockerHome
//         setIsLoading(false);
//       }

//       // Handle network changes
//       const handleChange = () => {
//         const newType = navigator.connection.effectiveType;
//         console.log('useNetworkSpeed: Network changed, new effectiveType:', newType); // Debug
//         if (newType in speedMap) {
//           setSpeedMbps(speedMap[newType]);
//         } else {
//           setSpeedMbps(1);
//         }
//       };
//       navigator.connection.addEventListener('change', handleChange);
//       return () => navigator.connection.removeEventListener('change', handleChange);
//     } else {
//       console.log('useNetworkSpeed: No Network API, assuming slow (1 Mbps)'); // Debug
//       setSpeedMbps(1); // Default to slow
//       setIsLoading(false);
//     }
//   }, []);

//   return { speedMbps, isLoading };
// };