// Take actions, and according to actions, update context state

const MovieReducer = (state, action) => {
    // type ffrom AuthAction
    switch(action.type){
        case "GET_MOVIES_START":
            return {
                movies:[],
                isFetching:true,
                // error set to true only if there is error fetching
                error:false
            }
        case "GET_MOVIES_SUCCESS":
            return {
                // movies from AuthAction payload.
                movies: action.payload,
                isFetching:false,
                error:false
            }
        case "GET_MOVIES_FAILURE":
            return {
                movies:[],
                isFetching:false,
                error:true
            }


        // Delete cases

        case "DELETE_MOVIE_START":
        return {
            ...state,
            isFetching: true,
            error: false,
         }
         case "DELETE_MOVIE_SUCCESS":
        return {
            movies: state.movies.filter((movie) => movie._id !== action.payload),
            isFetching: false,
            error: false,
        }
        case "DELETE_MOVIE_FAILURE":
        return {
            ...state,
            isFetching: false,
            error: true,
        }
            
            default:
                // Return state... i.e. nothing change
                return {...state}
    }
}

export default MovieReducer