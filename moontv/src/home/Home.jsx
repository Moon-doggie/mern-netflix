import Featured from "../components/featured/Featured"
import List from "../components/list/List"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"


const Home = () => {
  return (
    <div  className="home">
        <Navbar/>
        {/* Type has been set up to go into featured as below */}
        {/* <Featured type="movie"/> */}
        <Featured />
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        </div>
  )
}

export default Home