import React from 'react'
import { Button, TextField, Container } from '@mui/material';


function Generate(props) {
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
          <h3 className="black-text">Dropdown menu</h3>
          <h3 className="alttext">
          </h3>
        </div>
        <div className="paragraph">
          <pre className="small-text">
            Go!
          </pre>

        </div>

      </div>

    </>
  )
}

export default Generate;