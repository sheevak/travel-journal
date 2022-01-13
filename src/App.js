import React from "react"
import Destination from "./components/Destination"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {

    const destinationCard = data.map(item => {
        return (
            <Destination
                key = {item.id}
                {...item}
            />
        )
    })

    return(
        <div>
            <Navbar /> 
            <section className="destinations">
                {destinationCard}
            </section>
        </div>
        
    )
}