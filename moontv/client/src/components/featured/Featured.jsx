import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import "./featured.scss"

export default function Featured({type, setGenre}) {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
            const res = await axios.get(`/movies/random?type=${type}`, {
                headers: {
                    token: "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
                    // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDMyYmYxYjM4YjZhZDYyM2ZkOWIxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODgwNTI4MCwiZXhwIjoxNjQ5MjM3MjgwfQ.LHLPQRMMyY84oqKR5npPbzRnlgIR7Y9yFYAYqjirhG4"                        
                },
            })
            setContent(res.data[0])
            } 
            catch (err) {
                console.log(err)
            }
        }
        getRandomContent()
    }, [type])
    
    return (
        <div className="featured">
                {/* include type, so if there is type like series or movies, then show type. */}
                {type && (
                    <div className="category">
                        <span>{type === "movies" ? "Movies" : "Series"}</span> 
                        <select name="fenre" id="genre" onChange={(e)=> setGenre(e.target.value)}>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>                                               
                        </select>   
                    </div>
                ) }
            <img src={content.img }
            alt="" 
            />
            {/* info container  */}
            <div className="info">
            {/* image for information title */}
            <img src={content.imgTitle}
            alt="" 
            />
            <span className="description">
                {content.desc}
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>    
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>    
                    <span>Info</span>
                </button>            
                </div>
            </div>
        </div>
    )
}
