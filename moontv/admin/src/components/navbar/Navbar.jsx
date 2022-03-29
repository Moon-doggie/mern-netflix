import { ArrowDropDown, Language } from '@material-ui/icons'
import { Settings } from '@material-ui/icons'
import { NotificationsNone } from '@material-ui/icons'
import React, { useContext } from 'react'
import {logout} from "../../context/authContext/AuthAction"
import { AuthContext } from "../../context/authContext/AuthContext"
import "./navbar.scss"

export default function Navbar() {

    const { dispatch } = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className='navbarWrapper'>
            <div className="topleft">
                <span className="logo">Moonadmin</span>
            </div>
            
            <div className="topright">
                <div className="navbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="navbarIconContainer">
                    <Language/>
                </div>
                <div className="navbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://static.wikia.nocookie.net/evangelion/images/1/12/Rei_Ayanami_OP.png" alt="" className="topAvatar" />
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
