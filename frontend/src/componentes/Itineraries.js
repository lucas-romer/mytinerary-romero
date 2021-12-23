
import { useState } from "react";
import { connect } from "react-redux";
import activityAction from "../redux/actions/activityAction";
import itinerariesAction from "../redux/actions/itinerariesAction";
import {toast} from 'react-toastify';

function Itinerary(props) {
  
  function precio(price) {
    return Array.from({ length: price });
  }
  const handleClick = (id) => {
    setDisplay(!display)
    props.getActivity(id, props.activities)
    // props.activities && console.log(props.activities)
  };

  const [display, setDisplay] = useState(false)

  console.log(props.user)
  const [liked, setLiked] = useState("")
  const [likeQuantity, setlikeQuantity] = useState("")

  function handleLike(id) {
    if (localStorage.getItem("token")) {
      setLiked(!liked)
      liked ? setlikeQuantity(likeQuantity - 1) : setlikeQuantity(likeQuantity + 1)
      props.likes(props.user._id, id, props.cityId)
    } else {
      toast.warning("Please sign in to like this itinerary", {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <>
      {props.itineraries &&
        props.itineraries.map((itinerary, index) => (
          <div className="d-flex justify-content-center">
            <div key={index} className="itinerarioCard">
              <h2>{itinerary.title}</h2>
              <img className="singleCard" variant="top" src={itinerary.src} />
              <h4>{itinerary.name}</h4>

              <div className="div">
                <div className="minidiv">
                  <span onClick={() => handleLike(itinerary._id)}> {liked ? "♡" : "❤️"}  </span>
                  <div>Likes: {itinerary.like}</div>
                </div>
                <div className="minidiv">
                  <div>Duration: {itinerary.duration}Hs</div>
                </div>
                <div className="minidiv">
                  {precio(itinerary.price).map(() => (
                    <div>💵</div>
                  ))}
                </div>
              </div>
              <div className="hashtag">
                {itinerary.hashtags.map((hash) => (
                  <div className="tag"> #{hash}</div>
                ))}
              </div>

              <div>
                <button onClick= {() => handleClick(itinerary._id)}>
                                {" "}
                                {display ? "View less" : "View more"}
                </button>
               
                <div>
                  {display && (
                              props.activities.map(activity => 
                              {if(activity.itinerary._id === itinerary._id){
                              return(
                                    <div id="tour">
                                      <h3>{activity.name}</h3>
                                      <img id="itineraryImage" src={activity.src} alt={activity.name} />
                                      <p>{activity.description}</p>
                                    </div>
                                  )}
                                })
                              )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return{user: state.authReducer.newUser}
  
}

const mapDispatchToProps = {
  likes: itinerariesAction.likes,
  getActivity: activityAction.getActivity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);




