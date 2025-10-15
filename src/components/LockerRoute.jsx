// // src/components/LockerRoute.jsx
// import React, { useState, Suspense, lazy } from 'react';
// import { useNetworkSpeed } from '../hooks/useNetworkSpeed';
// import LightLockerHome from './LightLockerHome';

// // Lazy-load LockerHome to prevent any code execution until needed
// const LockerHome = lazy(() => {
//   console.log('LockerRoute: Lazy-loading LockerHome'); // Debug
//   return import('./LockerHome');
// });

// function LockerRoute() {
//   const { speedMbps, isLoading } = useNetworkSpeed();
//   const [forceHeavy, setForceHeavy] = useState(false);

//   console.log('LockerRoute: State:', { speedMbps, isLoading, forceHeavy }); // Debug

//   if (isLoading) {
//     console.log('LockerRoute: Rendering loading state'); // Debug
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   const shouldShowLight = speedMbps < 5 && !forceHeavy;
//   console.log('LockerRoute: Rendering:', shouldShowLight ? 'LightLockerHome' : 'LockerHome'); // Debug

//   return (
//     <Suspense fallback={<div>Loading heavy section...</div>}>
//       {shouldShowLight ? (
//         <LightLockerHome onLoadFull={() => {
//           console.log('LockerRoute: User clicked Load Full Experience'); // Debug
//           setForceHeavy(true);
//         }} />
//       ) : (
//         <LockerHome />
//       )}
//     </Suspense>
//   );
// }

// export default LockerRoute;