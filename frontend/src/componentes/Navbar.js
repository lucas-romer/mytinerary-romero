import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo1 from "../assets/Logo.jpg";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import authAction from "../redux/actions/AuthAction";

const NavBar = (props) => {
  return (
    <div className="navegador">
      <Navbar expand="md">
        <Container className="navegadorElementos">
          <div>
            <Navbar.Brand>
              <img className="logo" src={Logo1} alt="logo"></img>
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="link" to="/">
                  Home
                </Link>
                <Link className="link" to="/cities">
                  Cities
                </Link>
                <Link className="link" to="/signin">
                  Sign In
                </Link>
                <Link className="link" to="/signup">
                  Sign Up
                </Link>

                {!props.user ? (
                  <BiUserCircle />
                ) : (
                  <img id="profilePicture" src={props.user.photo} alt="profile picture"></img>
                )}

                {props.user && (
                  <button id="profilePicture" onClick={() => props.logOut()}>Log Out</button>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.authReducer.newUser };
};

const mapDispatchToProps = {
  logOut: authAction.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
