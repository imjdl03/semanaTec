import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Apoyo Países de Programas Internacionales</h1>
        <Form>
          <Form.Group controlID="insert-country" style={{padding: 30}}>
          <Form.Label>Search Country</Form.Label>
          <Form.Control type="text" placeholder="Insert Country Here" />
          </Form.Group>
          <Button variant="primary" type="search">
            Search
          </Button>
        </Form>
      </header>
    </div>

  );
}

export default App;
