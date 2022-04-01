import { ListItemSecondaryAction } from "@material-ui/core"
import { useState} from "react"
import "./newList.scss"
import storage from "../../firebase"
import { createMovie, getMovies } from "../../context/movieContext/apiCalls"
import { useContext } from "react"
import {ListContext} from "../../context/listContext/ListContext"
import {MovieContext} from "../../context/movieContext/MovieContext"
import { useEffect } from "react"
import { createList } from "../../context/listContext/apiCalls"
import {useNavigate} from 'react-router-dom'


export default function NewList() {
    
    const [list, setList] = useState(null)
    const navigate = useNavigate()

    // to show how many files have been uploaded.
    const [uploaded, setUploaded] = useState(0)
    
    const {dispatch} = useContext(ListContext)
    const {movies, dispatch: dispatchMovie} = useContext(MovieContext)

    useEffect(()=> {
        getMovies(dispatchMovie)
    },[dispatchMovie])

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value })
    }

    const handleSelect = (e) => {
        // Create array from selected options, for each option take option.value.
        let value = Array.from(e.target.selectedOptions, (option) => option.value)
        // set list, previous list and new selected value
        setList({...list, [e.target.name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createList(list, dispatch)
        navigate('/lists')
    }


  	return (
	 	<div className="newProduct">
            <h1 className="addProductTitle">New List</h1>
            <form className="addProductForm">
                <div className="formLeft">
                    <div className="addProductItem">
                        <label>Title</label>
                        <input type="text" placeholder="" name="title" onChange={handleChange}/>
                    </div>
                    <div className="addProductItem">
                        <label>Genre</label>
                        <input type="text" placeholder="" name="genre" onChange={handleChange}/>
                    </div>
                    <div className="addProductItem">
                        <label>Type</label>
                        <select name="type" onChange={handleChange}>
                            <option value="">Type</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </div>       
                </div>
                <div className="formRight">
                    <div className="addProductItem">
                        <label>Content</label>
                        <select multiple name="content" onChange={handleSelect} style={{height: "285px"}}>
                            {movies.map((movie) => (
                                <option key = {movie._id} value={movie._id}>{movie.title}</option>
                                ))}
                        </select>
                    </div>    
                </div>
                <button className="addProductButton" onClick={handleSubmit}>Create</button>   
            </form>
    	</div>
  	)
}
