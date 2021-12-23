import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { useRef } from "react";
import authAction from "../redux/actions/AuthAction";
import GoogleLogin from "react-google-login";

function SignInFront(props) {
  const responseGoogle = (response) => {
    props.signIn(response.profileObj.email, response.profileObj.googleId, true);
  };

  localStorage.getItem("token") && !props.token && props.signToken();

  const email = useRef();
  const password = useRef();

  const handleSumit = (e) => {
    e.preventDefault();
    props.signIn(email.current.value, password.current.value);
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <div>
      <Form className="form" onSubmit={handleSumit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={email}
              name="email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label name="password">Password</Form.Label>
            <Form.Control
              ref={password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Row>
        <div className="buttonForm">
          <input
            className="buttonForm"
            variant="primary"
            type="submit"
            value="submit"
          />
          <div>
            <GoogleLogin
              clientId="331999953587-f16bcdugoomop79lr8ifsp3uetio5lm2.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.authReducer.user, token: state.authReducer.token };
};

const mapDispatchToProps = {
  signIn: authAction.signIn,
  signToken: authAction.signToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInFront);
