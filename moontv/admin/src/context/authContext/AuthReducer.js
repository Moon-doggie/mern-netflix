// Take actions, and according to actions, update context state

const AuthReducer = (state, action) => {
    // type ffrom AuthAction
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                // Are we fetching data from api or not. False until login button is clicked
                isFetching:false,
                // error set to true only if there is error fetching
                error:false
            }
        case "LOGIN_SUCCESS":
            return {
                // user from AuthAction payload.
                user: action.payload,
                isFetching:false,
                error:false
            }
        case "LOGIN_FAILURE":
            return {
                user:null,
                isFetching:false,
                error:true
            }
        case "LOGOUT":
            return {
                user:null,
                isFetching:false,
                error:false
            }
            
            default:
                // Return state... i.e. nothing change
                return {...state}
    }
}

export default AuthReducer