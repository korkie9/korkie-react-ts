import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import wallgap from '../environment/wallgap.gif'
// import Typography from '@material-ui/core/Typography'

const Home = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="home-con" id="Home">

    </div>
  )
}

export default Home
