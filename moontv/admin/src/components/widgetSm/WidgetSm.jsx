import { Visibility } from "@material-ui/icons"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import "./widgetSm.scss"

export default function WidgetSm() {
    const [newUsers, setNewUsers] = useState([])

    useEffect(()=> {
        const getNewUsers = async () => {
            try{
                const res = await axios.get("/users?new=true", {
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzFmMjI2MmM3MTM2NDgwM2QwZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODI5MTA3NCwiZXhwIjoxNjQ4NzIzMDc0fQ.xdz4x00fej9frERoq9CDu51CaXk5qlp0k1owjP1n3iU"
                    }
                })
                setNewUsers(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getNewUsers()
    },[])

  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            {/* For each new user map through the item */}
            {newUsers.map(user => (

                <li className="widgetSmListItem">
                    {/* If there is no profilePic, use default */}
                <img src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className ="widgetSmIcon"/>
                    Display
                </button>
            </li>
            ))}
            
        </ul>
    </div>
  )
}