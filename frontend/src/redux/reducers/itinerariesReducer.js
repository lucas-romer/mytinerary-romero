const initialState = {
  itineraries: []
}

const itinerariesReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'GET_ITINERARY_BY_CITY_ID':
                return{
                  ...state,
                  itineraries: action.payload
                };
                case "SET_LOAD":
        return{
          ...state,
          isLoading: action.payload
        }
    case "LIKE":
      return {
        ...state,
        itineraries: action.payload,
      };
      default:
        return state
    }
}

export default itinerariesReducer
