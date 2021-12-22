
import {Link} from "react-router-dom"
import citiesAction from '../redux/actions/citiesAction'
import {connect} from 'react-redux'


function RenderCities (props) {

    !props.allCities[0] && props.getAllCities()
    return(
        <div >
            <div className="contenedor-ciudades container">
            <input
                onChange={(e) => 
                    props.filterCities(props.allCities, e.target.value.toLocaleLowerCase().trim())
                }
                type="text"
                className="buscador"
                placeholder="Search a City"
                />
                <div className="imagenesFiltro">
                    {props.auxiliar.length > 0 ? (
                        props.auxiliar.map(ciudad => {
                            return(
                                <Link to={`/city/${ciudad._id}`}>
                                    <div className="card-imagen ">
                                        <img className="imagenesCities" key={ciudad._id} alt= {ciudad.name} src={ciudad.src} />
                                        <div>
                                            <p className="nombresCities">{ciudad.name}<span>, {ciudad.country}</span></p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )
                    ):(<h3 className="sin-resultados">No results found, try another search</h3>)
                }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{allCities: state.citiesReducer.cities, auxiliar: state.citiesReducer.auxiliar}
}
const mapDispatchToProps = {getAllCities: citiesAction.getCities, filterCities: citiesAction.filterCities}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCities)

