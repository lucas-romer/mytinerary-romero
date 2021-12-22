import React from "react"
import NavBar from "../componentes/Navbar"
import Hero from "../componentes/Hero"
import Footer from "../componentes/Footer"
import '../App.css'
import Responsive from "../componentes/Responsive"


class Home extends React.Component{
    render(){
        return(
        <>
            <NavBar/>
            <Hero/>
            <Responsive/>
            <Footer/>
        </>
        )
    }
}
export default Home