import React, { useReducer } from 'react';
import Context, { user } from '../store/userStore';
import { reducer } from '../reducer/userReducer';


const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, user)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
export default Provider;