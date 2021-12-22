
const initialState = {
    state: [],
    cities: [],
    auxiliar: [],
    city: [],
    itineraries: [],
    

  }

  const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ALL_CITIES":
        return {
          ...state,
          cities: action.payload,
          auxiliar: action.payload

        }
        case "FILTER_CITIES":
          const filter = action.payload.allCities.filter((city) =>
          city.name.toLowerCase().startsWith(action.payload.searchCity.toLowerCase())
          )
          return {
            ...state,
            auxiliar: filter
          }
        case "GET_A_CITY":
          const city = action.payload.allCities.find((city) => 
          city._id === action.payload.id)
          return{
            ...state,
            city: city,
          }
          case 'GET_ITINERARY_BY_CITY_ID':
                return{
                  ...state,
                  itineraries: action.payload
                }
      default:
        return state
    }
  }

  export default citiesReducer