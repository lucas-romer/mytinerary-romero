import axios from 'axios';

const citiesAction = {
    getCities: () => {
        return async (dispatch, getState) => {
          let response = await axios.get("http://localhost:4000/api/cities")
          dispatch({
            type: "GET_ALL_CITIES",
            payload: response.data.response,
          })
        }
      },
      filterCities: (allCities, searchCity) => {
        return (dispatch, getState) => {
          dispatch({type:"FILTER_CITIES", payload:{allCities, searchCity}})
        }
      },
      findCity: (allCities, id) => {
        return (dispatch, getState) => {
          dispatch({type:"GET_A_CITY", payload:{allCities, id}})
        }
      },
      getItinerariesByCityId: (city_id) => {
        return async (dispatch, getState) => {
          let response = await axios.get("http://localhost:4000/api/itineraries/" + city_id)
          dispatch({type: "GET_ITINERARY_BY_CITY_ID", payload: response.data.response})
       }
     },
}

export default citiesAction