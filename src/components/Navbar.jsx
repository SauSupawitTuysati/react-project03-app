import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.jsx'

export default function Navbar() {
    return (
        <>
        <div style={{textAlign:"center"}}>
            <h5>
               <Link style={{margin:"5px"}} to={"/"}>Home</Link>
               <Link style={{margin:"5px"}} to={"/login"}>login</Link>
               <Link style={{margin:"5px"}} to={"/contact"}>Homcontacte</Link>
               <Link style={{margin:"5px"}} to={"/register"}>register</Link>
               <Link style={{margin:"5px"}} to={"/about"}>about</Link>

            </h5>
            <Header/>
        </div>
       
        </>
    )
}
