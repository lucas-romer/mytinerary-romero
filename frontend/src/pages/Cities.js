import React, {Component} from 'react'
import NavBar from '../componentes/Navbar'
import RenderCities from '../componentes/RenderCities'
import Footer from '../componentes/Footer'

class Cities extends Component  {
    render(){
        
        return (
            <div>
                <div className="back-ciudades">
                    <NavBar />
                    <div className="cont-titulo1 container">
                        <h1 className="carruselTitulo">Cities</h1>
                    </div>
                </div>
                <RenderCities/> 
                <Footer />
            </div>
        )
    }
}

export default Cities