import React from "react"
import NavBar from "../componentes/Navbar"
import Footer from "../componentes/Footer"
import '../App.css'
import Register from "../componentes/Register"


class SignUp extends React.Component{
    render(){
        return(
        <>
            <NavBar/>
            <Register/>
            <Footer/>
        </>
        )
    }
}
export default SignUp