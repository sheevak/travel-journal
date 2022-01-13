import React from "react"
import Pin from "../Images/Pin.png"

export default function Destination(props) {

    return (
        <article>
            <img src={require("../Images/" + props.image)}/>
            <div className="destination--container">
                <div className="destination--info">
                    <img className="pin" src={Pin}/>
                    <h5 className="destination--location">{props.location}</h5>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="destination--title">{props.title}</h2>
                <h5 className="destination--date">{props.startDate} - {props.endDate}</h5>
                <p className="destination--desc">{props.description}</p>
            </div>
            
            
            
        </article>
    )
}