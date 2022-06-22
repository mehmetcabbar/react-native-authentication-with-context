import React, { createContext } from 'react';

export const user = {
    email: 'example@example.com',
    setEmail: '',
    password: '12345678',
    setPassword: '',
    isLoggedIn: false,
    setIsLoggedIn: '',
}


export default Context = React.createContext(user);
