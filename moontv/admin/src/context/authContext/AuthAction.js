export const loginStart= () => ({
    type:"LOGIN_START"
})
// If successfull, return a user
export const loginSuccess= (user) => ({
    type:"LOGIN_SUCCESS",
    payload:user
})
export const loginFailure= () => ({
    type:"LOGIN_FAILURE",
})

// Logout
export const logout= () => ({
    type:"LOGOUT"
})