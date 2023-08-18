import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../src/pages/Home";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path="/Home" />
          <Route path="/" element={<Navigate to="Home" />} />
          {/* <Route component={About} path="/About" exact />
          <Route component={Experience} path="/Experience" exact />
          <Route component={Contact} path="/Contact" exact />
          <Route component={Admin} path="/Admin" exact />
          <Route component={Login} path="/Login" exact /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
