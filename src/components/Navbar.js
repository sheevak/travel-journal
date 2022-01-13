import React from "react"
import World from "../Images/World.png"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--icon" src={World} alt="An icon of the globe"/>
            <h1 className="nav--header">my travel journal.</h1>
        </nav>
    )
}