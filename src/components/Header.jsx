import React from "react"


export default function Header(){
    return(
        <header className="header">
            <img 
                src="./public/Troll-Face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React course Project - 3</h4>
        </header>
    )
}