import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss"
import Home from "./pages/home/Home";

import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

function App() {   

    return (
        <Router>
            <Navbar/>  
                <div className="container">
                    <Sidebar/>
                    <Routes>
                        <Route path ="/" element = {<Home/>}/>
                        <Route path ="/users" element = {<UserList/>}/>
                        <Route path ="/user/:userID" element = {<User/>}/>

            
                        
                    </Routes>
                </div>
        </Router>
  );
}

export default App;
