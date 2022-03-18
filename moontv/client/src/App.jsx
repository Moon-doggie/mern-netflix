import "./app.scss"
// Import components
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
// React-router-dom for routing
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link,
    Navigate
  } from "react-router-dom";

const App = () => {
    // Not implementation of user, just temporary...
    const user = true;
    return (
        <Router>
            {/* Note, no switch in v6 of react-router-dom */}
            <Routes>
                {/* Note v6 includes router and element, no need for 'exact' any more. Redirect replaced by Navigate */}
                <Route path="/" element = {user ? <Home/> : <Navigate to="/register"/>} />
                {/* If no user, display register page, if user, then navigate to home */}
                <Route path="/register" element = {!user ? <Register/> : <Navigate to="/"/>} />
                {/* If no user, display login page, if user, then navigate to home */}
                <Route path="/login" element = {!user ? <Login/> : <Navigate to="/"/>} />
                {
                    user && (
                        // Using multiple components without any parent, so use react fragments.
                        <>
                            <Route path="/movies" element = {<Home type="movies" />} />
                            <Route path="/series" element = {<Home type="series" />} />
                            <Route path="/watch" element = {<Watch/>} />
                        </>
                    )
                }                   
            </Routes>
        </Router>
    );
};

export default App