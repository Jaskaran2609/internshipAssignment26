import logo from "./logo.svg";
import "./App.css";

import { Route,Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import ViewDetails from "./components/ViewDetails.jsx";




const  App = () => {

  return (

     <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/viewdetails/:id" element ={<ViewDetails/>}/>
      </Routes>
    </div>
  )
}

export default App;
