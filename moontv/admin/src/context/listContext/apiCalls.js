import axios from "axios"
import { createListSuccess, createtListFailure, createtListStart, deleteListFailure, deleteListStart, deleteListSuccess, getListsFailure, getListsStart, getListsSuccess, updateListFailure, updateListStart, updateListSuccess } from "./ListAction"

export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try{
        const res = await axios.get("/lists", {
            headers: 
                {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                }
            })
            dispatch(getListsSuccess(res.data))

    }catch(err){
        dispatch(getListsFailure())
    }
}


//delete
export const deleteLists = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("/lists/" + id, {
            headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteListSuccess(id));
        } catch (err) {
        dispatch(deleteListFailure());
    }
}



// Add movie
export const createList = async (list, dispatch) => {
    dispatch(createtListStart());
    try {
        const res = await axios.post("/lists", list, {
            headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createListSuccess(res.data));
        } catch (err) {
        dispatch(createtListFailure());
    }
}

// Update movie
export const updateList = async (list, dispatch) => {
    dispatch(updateListStart());
    try {
        const res = await axios.post("/lists", list, {
            headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateListSuccess(res.data));
        } catch (err) {
        dispatch(updateListFailure());
    }
}



