// Take actions, and according to actions, update context state

const ListReducer = (state, action) => {
    // type ffrom AuthAction
    switch(action.type){
        case "GET_LISTS_START":
            return {
                lists:[],
                isFetching:true,
                // error set to true only if there is error fetching
                error:false
            }
        case "GET_LISTS_SUCCESS":
            return {
                // movies from AuthAction payload.
                lists: action.payload,
                isFetching:false,
                error:false
            }
        case "GET_LISTS_FAILURE":
            return {
                lists:[],
                isFetching:false,
                error:true
            }


        // Delete cases

        case "DELETE_LIST_START":
        return {
            ...state,
            isFetching: true,
            error: false,
         }
         case "DELETE_LIST_SUCCESS":
        return {
            lists: state.lists.filter((list) => list._id !== action.payload),
            isFetching: false,
            error: false,
        }
        case "DELETE_LIST_FAILURE":
        return {
            ...state,
            isFetching: false,
            error: true,
        }

        // Add cases

        case "DELETE_LIST_START":
        return {
            ...state,
            isFetching: true,
            error: false,
         }
         case "DELETE_LIST_SUCCESS":
        return {
            lists: [...state.lists, action.payload],
            isFetching: false,
            error: false,
        }
        case "DELETE_LIST_FAILURE":
        return {
            ...state,
            isFetching: false,
            error: true,
        }

        // Update cases

        case "UPDATE_LIST_START":
        return {
            ...state,
            isFetching: true,
            error: false,
         }
         case "UPDATE_LIST_SUCCESS":
        return {
            movies: state.lists.map((list)=>list._id === action.payload._id && action.payload),
            isFetching: false,
            error: false,
        }
        case "UPDATE_LIST_FAILURE":
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

export default ListReducer