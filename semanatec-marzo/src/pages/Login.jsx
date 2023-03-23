import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { NavLink, useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Intro.css";
import { Button, Form } from "react-bootstrap"

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form className="rounded p-4">
              <h2> Welcome Back! </h2>
              <Form.Group className="mb-3" controlId="loginBasicEmail">
                <Form.Label htmlFor="email-address">Email Address</Form.Label>
                <Form.Control
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="loginBasicPassword">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Button onClick={onLogin}>Login</Button>
              </Form.Group>
              <Form.Text>
              No account yet? <NavLink to="/signup">Sign up</NavLink>
              </Form.Text>
            </Form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
