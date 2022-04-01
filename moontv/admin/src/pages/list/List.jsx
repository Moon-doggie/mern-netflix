import { Link, useLocation } from "react-router-dom"
import "./list.scss"
import { Publish } from "@material-ui/icons"
import {MovieContext} from "../../context/movieContext/MovieContext"
import { useContext } from "react"
import { updateMovie, UpdateMovie } from "../../context/movieContext/apiCalls"
import { useState } from "react"
import storage from "../../firebase"

export default function List() {

    const location = useLocation()
    const {list} = location.state 

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">List</h1>
                <Link to="/newList">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <span className="productName">{list.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">{list._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{list.genre}</span> 
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Type:</span>
                            <span className="productInfoValue">{list.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">                    
                        <label htmlFor="">List Title</label>
                        <input type="text" placeholder={list.title} />
                        <label htmlFor="">Type</label>
                        <input type="text" placeholder={list.type} />
                        <label htmlFor="">Genre</label>
                        <input type="text" placeholder={list.genre} />                           
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <label for="file">
                                <Publish/>
                            </label>
                                <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
  )
}
