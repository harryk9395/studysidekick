import * as React from 'react';
import { useState } from 'react'
import './components/App.css';
import Home from './components/Home';
import Generate from './components/Generate';


export default function App() {

  // setPage is a function that we pass to the child components. 
  // They can call the function to change page here.
  const [page, setPage] = useState("home");

  if (page === "home") {
    return <Home setPage={setPage} />
  }
  else {
    return (
      <Generate setPage={setPage} />
    )
  }
}