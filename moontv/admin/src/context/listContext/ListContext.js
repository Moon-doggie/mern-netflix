import { useReducer } from "react"
import { useEffect } from "react"
import { createContext } from "react"
import ListReducer from "./ListReducer"

// Initial state
const INITIAL_STATE = {
    // get user information from local storage, if there is none... set to null
    lists: [],
    isFetching:false,
    error:false
}

export const ListContext = createContext(INITIAL_STATE)

export const ListContextProvider = ({children}) =>{
    // Dispatch actions.
    const [state, dispatch] = useReducer(ListReducer, INITIAL_STATE)

    return(
        <ListContext.Provider value ={{
            lists:state.lists, 
            isFetching:state.isFetching, 
            error:state.error, 
            dispatch}}>
                {children}
        </ListContext.Provider>
    )
}
