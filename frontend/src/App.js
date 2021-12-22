import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cities from './pages/Cities'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import City from "./pages/City";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { connect } from "react-redux";
import authAction from "./redux/actions/AuthAction";
import { useEffect } from "react";

function App(props){

  const { signToken } = props;
  useEffect(() => {
      const token =localStorage.getItem('token')
      if(token){
        signToken();
        }
  }, [signToken]);
  return(
    <>

      <BrowserRouter>
      <ToastContainer autoClose={4000} />
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/cities' element={<Cities/>}/> 
          <Route path='/city/:id' element={<City/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.newUser,
  };
};

const mapDispatchToProps = {
  signToken: authAction.signToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);