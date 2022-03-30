import { useReducer } from "react"
import { useEffect } from "react"
import { createContext } from "react"
import MovieReducer from "./MovieReducer"

// Initial state
const INITIAL_STATE = {
    // get user information from local storage, if there is none... set to null
    movies: [],
    isFetching:false,
    error:false
}

export const MovieContext = createContext(INITIAL_STATE)

export const MovieContextProvider = ({children}) =>{
    // Dispatch actions.
    const [state, dispatch] = useReducer(MovieReducer, INITIAL_STATE)

    return(
        <MovieContext.Provider value ={{
            movies:state.movies, 
            isFetching:state.isFetching, 
            error:state.error, 
            dispatch}}>
                {children}
        </MovieContext.Provider>
    )
}
