import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import "./login.scss"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isFetching, dispatch } = useContext(AuthContext)
  
    const handleLogin = (e) => {
        // prevent defaults stops page refreshing when button is clicked.
        e.preventDefault()
        login({ email, password }, dispatch)
    };
  
    return (
        <div className="login">
            <form className="loginForm">
            <input
                type="text"
                placeholder="email"
                className="loginInput"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                className="loginInput"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="loginButton"
                onClick={handleLogin}
                // If is fetching is true, button is disabled.
                disabled={isFetching}
            >
                Login
            </button>
            </form>
        </div>
    );
}
