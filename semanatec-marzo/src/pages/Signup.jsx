import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Intro.css";
import { Button, Form } from "react-bootstrap"

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div className="color-overlay d-flex justify-content-center align-items-center">
            <Form className="rounded p-4">
            <h2> Countries for Me!</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="email-address">Email Address</Form.Label>
                <Form.Control
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group>
                <Button type="submit" onClick={onSubmit}>
                  Sign Up
                </Button>
              </Form.Group>

              <Form.Text>              
                Already have an account? <NavLink to="/login">Sign in</NavLink>
              </Form.Text>
            </Form>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
