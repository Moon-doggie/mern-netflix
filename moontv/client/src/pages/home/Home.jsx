import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import "./home.scss"
import { useEffect, useState } from "react"
import axios from "axios"

// Include type as props 
const Home = ({type}) => {
    // Usestate for lists for multiple lists, initial state set to empty array.
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    
    // Fetch lists when opening page using useEffect.
    useEffect(() => {
        // async becasue fetching data from api.        
        const getRandomLists = async () => {
            // use lists url, if have type add type (movies or series), and if we have a genre, add genre. 
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzFmMjI2MmM3MTM2NDgwM2QwZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzU4ODQzNiwiZXhwIjoxNjQ4MDIwNDM2fQ.xB9iAMv-b2ZHiNDPKErp5OL2R6h8e9VWuwviuDadcB0"
                    },
                }
            )
            setLists(res.data);
            } 
            catch (err) {
                console.log(err)
            }
        };
        getRandomLists()
    }, [type, genre])

  return (
    <div  className="home">
        <Navbar/>
        {/* Type has been set up to go into featured as below */}
        {/* <Featured type="movie"/> */}
        <Featured type={type} />
        {/* map through, and for each lists call the list component and pass the list */}
        {lists.map((list) => (
            <List list={list} />
        ))}
        </div> 
  )
}

export default Home