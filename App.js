import React, { useReducer } from 'react';
import Provider from './src/context/provider/userProvider';
import Navigation from './src/pages/navigation/navigation';



export default App = () => {

  return (
    <Provider>
      <Navigation />
    </Provider>
  )
};


