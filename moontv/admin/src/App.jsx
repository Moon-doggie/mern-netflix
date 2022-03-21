import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss"
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
        <Navbar/>  
        <div className="container">
            <Sidebar/>
            <Home/>
        </div>        
    </div>
  );
}

export default App;
