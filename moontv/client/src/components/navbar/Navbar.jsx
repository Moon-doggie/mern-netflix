import { ArrowDropDown, LaptopWindows, Notifications, Search } from '@material-ui/icons'
import { useContext, useState } from 'react'
import {AuthContext} from '../../context/authContext/AuthContext'
import {logout} from "../../context/authContext/AuthAction"
import { Link } from 'react-router-dom';    
import './navbar.scss'

const Navbar = () => {
    // set useState for scroll effect i.e. transparent at top and black when isScrolled
    const [isScrolled, setIsScrolled]  = useState(false);

    // logout 
    const {dispatch}  = useContext(AuthContext)

    window.onscroll = () => {
        // if it is on the top then false, if not on the top then set to true.
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
  return (
      // Condition, if isSCrolled then navbar scrolled style, if false, then navbar style.
    <div className= {isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
                alt="" 
                />
                <Link to ="/" className='link' >
                    <span>Homepage</span>
                </Link>
                <Link to ="/series" className='link' >
                    <span className='navbarMainLinks'>Series</span>
                </Link>
                <Link to ="/movies" className='link'>
                    <span className='navbarMainLinks'>Movies</span>
                </Link>
                <span>New</span>
                <span>Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>Jackson</span>
                <Notifications className='icon'/>
                {/* THIS WILL BE FOR THE PROFILE PICTURE... HAVE TO ADD THIS ONE LATER */}
                <img src="https://static.wikia.nocookie.net/evangelion/images/1/12/Rei_Ayanami_OP.png" alt="" />   
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={() => dispatch(logout())}>Logout</span>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Navbar