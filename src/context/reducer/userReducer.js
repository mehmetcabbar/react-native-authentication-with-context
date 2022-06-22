
export function reducer(state = {}, action) {
    console.log(action.payload)
    switch (action.type) {
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1
            return { ...state }
        case "DECREASE_COUNTER": state.counter = state.counter - 1
            return { ...state }
        case "SET_EMAIL": state.email = action.payload
            return { ...state }
        case "SET_PASSWORD": state.password = action.payload
            return { ...state }
        case "LOGIN": state.isLoggedIn = action.payload
            return { ...state }
        case "LOGOUT": state.isLoggedIn = action.payload
            return { ...state }
        default:
            return state
    }
}
