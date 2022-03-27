import { CalendarToday } from "@material-ui/icons"
import { MailOutline } from "@material-ui/icons"
import { Publish } from "@material-ui/icons"
import { LocationSearching } from "@material-ui/icons"
import { PhoneAndroid } from "@material-ui/icons"
import { PermIdentity } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.scss"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://miro.medium.com/max/770/1*IvGBptEUVwlOSyXLNs3yJw.jpeg" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Elliot Anderson</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                    <PermIdentity className="userShowIcon"/>
                    <span className="userShowInfoTitle">G.Host</span>
                    </div>
                    <div className="userShowInfo">
                    <CalendarToday className="c"/>
                    <span className="userShowInfoTitle">01/01/1990</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                    <PhoneAndroid className="userShowIcon"/>
                    <span className="userShowInfoTitle">07 3000 3268</span>
                    </div>
                    <div className="userShowInfo">
                    <MailOutline className="userShowIcon"/>
                    <span className="userShowInfoTitle">g.host@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <LocationSearching className="userShowIcon"/>
                    <span className="userShowInfoTitle">New York</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label >Username</label>
                        <input type="text" placeholder="" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Full Name</label>
                        <input type="text" placeholder="" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Email</label>
                        <input type="text" placeholder="" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Phone</label>
                        <input type="text" placeholder="" className="userUpdateInput" />
                    </div>
                    <div className="userUpdateItem">
                        <label >Address</label>
                        <input type="text" placeholder="" className="userUpdateInput" />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://miro.medium.com/max/770/1*IvGBptEUVwlOSyXLNs3yJw.jpeg" alt="" className="userUploadImage"/>
                        <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                        {/* Hide input and use click on publish icon only */}
                        <input type="file" id="file" style={{display:"none"}} />
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
                </form>    
            </div>
        </div>
    </div>
  )
}
