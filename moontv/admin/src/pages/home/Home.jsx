import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.scss"
import { userData } from "../../dummyData"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { useMemo } from "react";

export default function Home() {
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
      );

    const [userStats, setUserStats] = useState([])

    useEffect(()=>{
        const getStats = async () => {
            try{
                const res = await axios.get("/users/stats", {
                    headers:{
                        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzFmMjI2MmM3MTM2NDgwM2QwZmQxYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODI5MTA3NCwiZXhwIjoxNjQ4NzIzMDc0fQ.xdz4x00fej9frERoq9CDu51CaXk5qlp0k1owjP1n3iU"
                    }
                })
                // Sorting is required due to manual editing of database to have new users across seveal months.
                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id
                })
                //   -1 because of array difference
                  statsList.map((item) => setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], "New User": item.total },]))
                } 
                catch (err) {
                  console.log(err)
                }
        }
        getStats()
    }, [MONTHS]) 

    console.log(userStats)

  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userStats} title = "User Analytics" grid dataKey = "New User"/>
        <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/> 
        </div>
    </div>
  )
}
