import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import axios from "axios"
import { useEffect, useState } from "react"
import "./featured.scss"

export default function Featured({type}) {
    const [content, setContent] = useState({})

    useEffect(() => {
        const getRandomContent = async () => {
            try {
            const res = await axios.get(`/movies/random?type=${type}`, {
                headers: {
                    token:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzFmMjI2MmM3MTM2NDgwM2QwZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODI5MTA3NCwiZXhwIjoxNjQ4NzIzMDc0fQ.xdz4x00fej9frERoq9CDu51CaXk5qlp0k1owjP1n3iU d"
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
                        <select name="fenre" id="genre">
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
