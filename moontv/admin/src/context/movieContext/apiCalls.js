import axios from "axios"
import { createMovieSuccess, createtMovieFailure, createtMovieStart, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess, updateMovieFailure, updateMovieStart, updateMovieSuccess } from "./MovieAction"

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try{
        const res = await axios.get("/movies", {
            headers: 
                {token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
                }
            })
            dispatch(getMoviesSuccess(res.data))

    }catch(err){
        dispatch(getMoviesFailure())
    }
}


//delete
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete("/movies/" + id, {
            headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(deleteMovieSuccess(id));
        } catch (err) {
        dispatch(deleteMovieFailure());
    }
}



// Add movie
export const createMovie = async (movie, dispatch) => {
    dispatch(createtMovieStart());
    try {
        const res = await axios.post("/movies", movie, {
            headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data));
        } catch (err) {
        dispatch(createtMovieFailure());
    }
}

// Update movie
export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
        const res = await axios.post("/movies", movie, {
            headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(updateMovieSuccess(res.data));
        } catch (err) {
        dispatch(updateMovieFailure());
    }
}



