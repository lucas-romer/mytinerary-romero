
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import citiesAction from "../redux/actions/citiesAction";
import { useEffect} from "react";

function Responsive (props) {

  useEffect(() => {
    props.getCities();
  }, []);

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }
        ]
      };
      return (
        <div className="carrusel">
          <h2 className="carruselTitulo">Popular Mytineraries</h2>
          <Slider {...settings}>
            {props.cities.length > 0 && props.cities.map((img,index)=>{
              return(
                <div key={index}>
                  <div className="cartas">          
                        <Card >
                        <Card.Img className="imagenesCarrusel" variant="top" src={img.src} />
                        <Card.Body>
                          <Card.Title className="titulosCiudades">{`${img.name}, ${img.country}`}</Card.Title>
                        </Card.Body>
                      </Card>
                    </div>
            </div>)
            })}
          </Slider>
        </div>
      );
    }

    const mapDispatchToProps = ({ 
      getCities: citiesAction.getCities,
  })
  
  const mapStateToProps = (state) => {
    return {
      cities: state.citiesReducer.cities,
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Responsive)

  