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
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react"
import { AuthContext } from "./context/authContext/AuthContext"

function App() {   
    const { user } = useContext(AuthContext)
    // const user = false
    return (
        <Router>
            { 
                user && (
                    <Navbar/>  
                )
            }
                <div className="container">
                    {
                        user && (
                            <Sidebar/>
                        )
                    }
                    <Routes>
                        <Route path ="/" element = {user ? <Home/> : <Navigate to="/login"/>}/>
                        <Route path ="/login" element = {!user ? <Login/> : <Navigate to="/"/>}/>                        
                        <Route path ="/users" element = {user ? <UserList/> : <Navigate to="/login"/>}/>
                        <Route path ="/user/:userId" element = {user ?  <User/> : <Navigate to="/login"/>}/>
                        <Route path ="/newUser" element = {user ? <NewUser/> : <Navigate to="/login"/>}/>
                        <Route path ="/movies" element = {user ? <ProductList/> : <Navigate to="/login"/>}/>
                        <Route path ="/product/:productId" element = {user ? <Product/> : <Navigate to="/login"/>}/>
                        <Route path ="/newProduct" element = {user ? <NewProduct/> : <Navigate to="/login"/>}/>                                    
                    </Routes>
                </div>
        </Router>
  );
}

export default App;
