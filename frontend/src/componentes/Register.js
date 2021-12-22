import React, { useState } from "react"
import {Form, Row, Col} from "react-bootstrap"
import authAction from "../redux/actions/AuthAction"
import {connect} from "react-redux"
import GoogleLogin from 'react-google-login';
import countries from "./Countries"
import {Link, useNavigate } from "react-router-dom"



function Register(props) {
  let navigate = useNavigate()
  localStorage.getItem("token") && !props.token && props.signToken()
  props.token && navigate("/", {replace: true})
  
 const responseGoogle = (response) => {
   
   let googleUser = {
     name: response.profileObj.givenName,
     lastname: response.profileObj.familyName,
     email: response.profileObj.email,
     password: response.profileObj.googleId,
     photo: response.profileObj.imageUrl,
     country: "Argentina" ,
     google:true,
   }
   props.signupUser(googleUser)
 }

 const [values, setValues] = useState({name: "", lastname:"", email:"", password:"", photo:"", country:""})
 const inputHandler = (e) => {
  setValues({
      ...values,
      [e.target.name]: e.target.value

  })
}

 const handleSumit = (e) => {
   e.preventDefault()
   props.signupUser(values)

     values.name = ""
     values.lastname = ""
     values.email = ""
     values.password = ""
     values.photo = ""
     values.country = ""      
    
 }

    return(<div>
    <Form className="form" onSubmit={handleSumit}>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Name</Form.Label>
      <Form.Control placeholder="Name"  name="name" onChange={inputHandler}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last Name" name="lastname" onChange={inputHandler}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  name="email" onChange={inputHandler}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label
      name="password">Password 
      </Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange={inputHandler}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Photo</Form.Label>
      <Form.Control placeholder="photo"  name="photo"  onChange={inputHandler}/>
    </Form.Group>

  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridState" >
      <Form.Label>Country</Form.Label>
      <Form.Select defaultValue="Choose..." name="country" onChange={inputHandler}>
      {countries.sort().map((country => {

return (
  <option htmlFor="country">{country}</option>
)
}))}
      </Form.Select>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <div className="buttonForm">
    <input className="buttonForm" variant="primary" type="submit" value="submit"/>
    <div>
     <GoogleLogin
    clientId="331999953587-dbg78bmhlodssh6ppaa23l537uug0bn1.apps.googleusercontent.com"
    buttonText="Sign Up"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  </div>
  <div className="already">
              <p>Already have an account? </p>
              <Link to='/signin'><span> Sign in here!</span></Link>            
            </div>
</Form>
</div>
    )
}

const mapStateToProps = (state) => {
  return {
    newUser: state.authReducer.newUser,
    token: state.authReducer.token
  }
}

const mapDispatchToProps = {
  signupUser: authAction.signupUser, 
  signToken: authAction.signToken
}

export default connect(mapStateToProps, mapDispatchToProps) (Register)
