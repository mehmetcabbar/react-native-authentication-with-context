import React, { useReducer } from 'react';
import Navigation from './src/constant/components/navigation/navigation';
import Provider from './src/context/provider/userProvider';



export default App = () => {

  return (
    <Provider>
      <Navigation />
    </Provider>
  )
};


