import React from "react"
import NavBar from "../componentes/Navbar"
import Footer from "../componentes/Footer"
import '../App.css'
import SignInFront from "../componentes/SignInFront"


class SignIn extends React.Component{
    render(){
        return(
        <>
            <NavBar/>
            <SignInFront/>
            <Footer/>
        </>
        )
    }
}
export default SignIn