import React from 'react';
import Homepage from './components/Homepage';

// The main dashboard image path would be imported here
const dashboardImage = '/dashboard-image.png'; // Path to your dashboard image

function App() {
  return (
    <Homepage dashboardImageSrc={dashboardImage} />
  );
}

export default App;