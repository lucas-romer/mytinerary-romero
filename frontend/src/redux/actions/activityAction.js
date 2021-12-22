import axios from 'axios';

const activityAction = {
    getActivity:(id, activities) => {
        return async(dispatch)=>{
            let idList = [...new Set(activities.map(activity=> activity.itinerary._id))]

            let res = []
            if(idList.includes(id)){            
              res = activities
                
            }else{               
                let resDb = await axios.post("http://localhost:4000/api/activities",{id:id})
                res = resDb.data.response
            }
            dispatch({type: "GET_ACTIVITIES", payload: {itineraryId: id, activityList: res}})
            
        }
    }
}

export default activityAction