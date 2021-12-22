import {useEffect} from "react"
import {connect} from "react-redux"
import citiesAction from "../redux/actions/citiesAction"
import itinerariesAction from "../redux/actions/itinerariesAction"
import {useParams} from "react-router-dom"
import Itineraries from "./Itineraries"
import {Link} from "react-router-dom"


function Ciudad(props) {
  const params = useParams()

  useEffect(() => {
    !props.cities[0] && props.getCities() 
    props.cities[0] && props.findCity(props.cities, params.id) 
    props.getItinerariesByCityId(params.id)
  }, [props.cities])
  
  const back = {
    backgroundImage: "url(" + props.city.src + ")",
    width: "100%",
    height: "70vh",
    "background-repeat": "no-repeat",
    "background-position": "center",
    "background-size": "cover",
    "z-index": "-1",
  }

  return (
    <>
    <div className="fondo-itinerario">
      <div className="back" style={back}></div>
      <h1 className="d-flex justify-content-center">{props.city.name}</h1>
      <p className="description container">{props.city.description}</p>
      {props.itineraries[0] ? (
        <Itineraries itineraries={props.itineraries} cityId={params.id} activities={props.activities}/>
        ) : (
          <h1>There are not itineraries for this city yet...</h1>
          )}
          <Link className="btn btn-warning m-2"to="/cities">Back to Cities</Link>
    </div>
    </>
  )
}

const mapDispatchToProps = {

  getCities: citiesAction.getCities,
  findCity: citiesAction.findCity,
  getItinerariesByCityId: itinerariesAction.getItinerariesByCityId,
}

const mapStateToProps = (state) => {

  return {
    cities: state.citiesReducer.cities,
    city: state.citiesReducer.city,
    itineraries: state.itinerariesReducer.itineraries,
    activities: state.activityReducer.activities,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ciudad)
