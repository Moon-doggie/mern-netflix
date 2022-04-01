export const getListsStart= () => ({
    type:"GET_LISTS_START"
})
export const getListsSuccess= (lists) => ({
    type:"GET_LISTS_SUCCESS",
    payload: lists
})
export const getListsFailure= () => ({
    type:"GET_LISTS_FAILURE"
})

// Delete 
export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
})  
export const deleteListSuccess = (id) => ({
type: "DELETE_LIST_SUCCESS",
payload: id,
})
export const deleteListFailure = () => ({
type: "DELETE_LIST_FAILURE",
})

// Add List

export const createtListStart= () => ({
    type:"CREATE_LIST_START"
})
export const createListSuccess= (list) => ({
    type:"CREATE_LIST_SUCCESS",
    payload: list
})
export const createtListFailure= () => ({
    type:"CREATE_LIST_FAILURE"
})

// Upadte list

export const updateListStart= () => ({
    type:"UPDATE_LIST_START"
})
export const updateListSuccess= (list) => ({
    type:"UPDATE_LIST_SUCCESS",
    payload: list
})
export const updateListFailure= () => ({
    type:"UPDATE_LIST_FAILURE"
})
