import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";



const Home = () => {
  const navigate = useNavigate();
  const [pais, setPais] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();

  console.log("pais => ", pais);
  console.log("data => ", data);



  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene la recarga de la página
    try {
      const response = await axios.get('https://restcountries.com/v3.1/translation/' + pais);
      setData(response.data);
    } catch (error) {
      setData(error);
    }
  }

  return (
    <>
      <nav>
        <p>Welcome Home</p>

        <div>
          <button onClick={handleLogout}>Logout</button>``
          
          <form onSubmit={handleSubmit}>
            <label>¿Sobre que país quieres investigar?
              <input
              type="text"
              value={pais}
              onChange={(e) => setPais(e.target.value)} />
            </label>
            <button type="submit">Enviar</button>
            
          </form>

          
          
          
          
          

        </div>
      </nav>
    </>
  );
};

export default Home;
