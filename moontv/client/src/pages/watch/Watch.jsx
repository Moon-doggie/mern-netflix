import { ArrowBackOutlined } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import './watch.scss'

export default function Watch() {
    const location = useLocation()
    const {movie} = location.state 
    
    return (
        <div className="watch">
            <Link to="/">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            </Link>
            {/* Video needs to be made dynamic... */}
            <video src={movie.video} 
            className="video" 
            autoplay 
            progress 
            controls>                
            </video>
        </div>
    )
}
