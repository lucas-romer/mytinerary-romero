import React from "react"
import NavBar from "../componentes/Navbar"

class Home extends React.Component{
    render(){
        return(
        <>
            <NavBar/>
            <h1 className="m-5">Mytinerary</h1>
        </>
        )
    }
}
export default Home