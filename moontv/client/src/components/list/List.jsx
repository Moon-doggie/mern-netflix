import "./list.scss"


import React, { useRef, useState } from 'react'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "../listItem/ListItem"

export default function List({ list }) {

    const[isMoved, setIsMoved] = useState(false)
    const[slideNumber, setSlideNumber] = useState(0)
    const[clickLimit, setClickLimit] = useState(window.innerWidth / 230)



    // because no JSX, no using vanilla JS i.e. element id.... So use useRef Code.
    const listRef = useRef()

    // function to handle arrow click events (direction = left or right).
    const handleClick = (direction) =>{
        setIsMoved(true);
        // gets the distance from the left of the screen to the current list item. 50 is minused for the width of the arrow.
        let distance = listRef.current.getBoundingClientRect().x - 50;
        // as each item has 225 plus 5 margin (total 230). it should move this much on click.
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1);
            // note used ` ` for the inclusion of distance
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        } 

        if(direction === "right" && slideNumber < 10 - clickLimit){
            setSlideNumber(slideNumber + 1)
            // note used ` ` for the inclusion of distance
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        } 

    }
  return (
    <div className="list">
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            {/* Arrow function to handle click events.*/}
            <ArrowBackIosOutlined 
            className="sliderArrow left" 
            onClick={()=>handleClick("left")}
            style={{display: !isMoved && "none"}}
            />
            <div className="container" ref={listRef}> 
            {
                list.content.map((item, i) => (
                <ListItem index={i} item={item} />
            ))}             
            </div>
            {/* Arrow function to handle click events. */}
            <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=>handleClick("right")}/>
        </div>
    </div>
  )
}
