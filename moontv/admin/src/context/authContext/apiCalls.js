import axios from "axios"
import { loginFailure, loginStart, loginSuccess } from "./AuthAction"

// take email and password, and dispatch
export const login = async (user, dispatch) => {
    dispatch(loginStart())
    try{
        const res = await axios.post("auth/login", user)
        // only dispatch login_success if user is admin.
        res.data.isAdmin && dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}