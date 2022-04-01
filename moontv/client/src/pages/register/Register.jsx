import { useRef, useState } from 'react'
import './register.scss'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()

    const navigate = useNavigate()  

    // function to set email onclick to current emailRef value.
    const handleStart = () =>{
        setEmail(emailRef.current.value)
        setUsername(usernameRef.current.value)
    }


    // function to set password onclick to current passwordRef value.
    const handleFinish = async (e) =>{
        e.preventDefault()
        // setUsername(usernameRef.current.value)
        setPassword(passwordRef.current.value)        
        try{
            await axios.post("auth/register", {email, username, password})
            navigate('/login')            
        }catch(err){
            console.log(err)
        }
    }

    // navigate to loginpage on login click
    const handleLoginNavigate = (e) => {
        e.preventDefault()
        navigate('/login')
    }

  return (
    <div className="register">
        <div className="top">
            <div className="wrapper">  

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="" className='logo'/>
                <Link to="/login" className='link'>
                <button className="loginButton">Sign In</button>    
                </Link>
            </div>
        </div>    
        <div className="container">
            <h1>
                Unlimited movies, TV shows, and more.
            </h1>
            <h2>
                Watch anywhere, Cancel anytime.
            </h2> 
            <p>
                Ready to watch? Enter your email to create or restard your membership.
            </p>
            {
                !email ? (
                    <div className="input">
                        <input type="email" placeholder="email address" ref={emailRef}/>
                        <input type="username" placeholder="username" ref={usernameRef}/>
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>                    
                ) : (
                    <form className="input">
                        {/* <input type="username" placeholder="username" ref={usernameRef}/> */}
                        <input type="password" placeholder="password" ref={passwordRef}/>
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>   

                )}
        </div>
    </div>
  )
}