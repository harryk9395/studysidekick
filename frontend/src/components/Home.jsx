import React from 'react'
import Button from '@mui/material/Button';


function Home(props) {
  const setPage = props.setPage;
  console.log(typeof setPage)

  return (
    <>
      <div className="background-image">
        <Button className="position-bottom" variant="contained" onClick={() => setPage("generate")} >Start Studying!</Button>
      </div>
    </>
  )
}

export default Home;