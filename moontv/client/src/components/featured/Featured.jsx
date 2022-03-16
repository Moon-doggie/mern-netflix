import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}) {
    return (
        <div className="featured">
                {/* include type, so if there is type like series or movies, then show type. */}
                {type && (
                    <div className="category">
                        <span>{type === "movie" ? "Movies" : "Series"}</span> 
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
            <img src="https://i.pinimg.com/originals/1a/9c/f4/1a9cf4a7e2eaccc072f410b4b656073a.png"
            alt="" 
            />
            {/* info container  */}
            <div className="info">
            {/* image for information title */}
            <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbJ1UgdLK5z1LclD2A_4j4Cd1gs_AK3Oq7cJD0IKww1XvN9bh722-QynrUIFKZrHZvURjrmVJAr9Rr9phEUB21gEggsGE4VIWEJr.png?r=873" 
            alt="" 
            />
            <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum adipisci eum, nemo reprehenderit magnam officiis tenetur? Laboriosam, veritatis quos, esse soluta quo autem quia aut maiores officiis, fugiat veniam.
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
