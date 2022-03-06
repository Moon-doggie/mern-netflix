import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
                alt="" 
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
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
                        <span>Logout</span>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Navbar