import React from "react";

export default function Navbar () {
    return (
        <nav>
        <img className="nav--icon"/>
        <h1 className="nav--name">Danushka Madushan</h1>
        <h2 className="nav--title">Fullstack Developer</h2>
        <h3 className="nav--web">danushkamadushan.website</h3>
        <ol>
            <button className="btn1"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i>Email</button>
            <button className="btn2"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>LinkedIn</button>
        </ol>
        </nav>
    )
}