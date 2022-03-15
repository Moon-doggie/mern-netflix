import { ArrowBackOutlined } from '@material-ui/icons'
import './watch.scss'

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video src="https://youtu.be/T4J7QjGNTs4" 
        className="video" 
        autoplay 
        progress 
        controls></video>
    </div>
  )
}
