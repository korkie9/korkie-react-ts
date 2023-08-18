import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
// import wallgap from "../environment/wallgap.gif";
// import Typography from '@material-ui/core/Typography'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="home-con" id="Home">
      <h4>Hey! Welcome</h4>
    </div>
  );
};

export default Home;
