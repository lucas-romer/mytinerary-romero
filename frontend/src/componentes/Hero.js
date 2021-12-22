import {Button} from "react-bootstrap"
import React from "react"
import portada1 from "../assets/portada1.jpg"


const Hero = () => {
    return(
        <>
        <div className="alto">
            <img className="portada" src={portada1} alt="portada"></img>
            <div className="portada-texto">
                <div>
                    <h1 className="titulo">Mytinerary</h1>
                </div>
                <div className="containerPortada">
                    <div>
                    <div>
                        <h1>Find your perfect trip,</h1>
                        <h3>designed by insiders who know and love their cities!</h3>
                    </div>
                    <div className="d-flex align-self-center justify-content-center">
                        <Button href="./Cities" variant="warning">Click in your dream destination</Button>
                    </div>
                </div>
            </div>
            </div>
 
        </div>
        </>
    )
}

export default Hero