import { useReducer } from "react"
import { useEffect } from "react"
import { createContext } from "react"
import AuthReducer from "./AuthReducer"

// Initial state
const INITIAL_STATE = {
    // get user information from local storage, if there is none... set to null
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) =>{
    // Dispatch actions.
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    // Save information in local storage
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return(
        <AuthContext.Provider value ={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>{children}</AuthContext.Provider>
    )
}
