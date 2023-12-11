import React from 'react'
import { Button, TextField, Container } from '@mui/material';


function Home(props) {
  const setPage = props.setPage;
  console.log(typeof setPage)

  return (
    <>
      <ul className="nav">
        <li>  </li>
      </ul>
      <div className="main-page">
        <h1>StudySidekick</h1>
        <div className="alternate">
          <h3 className="black-text">Study SAT effectively with unlimited practice problems!</h3>
          <h3 className="alttext">
          </h3>
        </div>
        <div className="paragraph">
          <pre className="small-text">
            Using AI to create problems for students
          </pre>
          <pre className="small-text">
            Try it out!
          </pre>
        </div>
        <Button color="error" sx={{ borderRadius: 28 }} variant="contained" onClick={() => setPage("generate")}>Start practicing →</Button>

      </div>

    </>
  )
}

export default Home;