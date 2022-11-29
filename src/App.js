// import './App.css';

import AboutTataru from "./pages/About";
import LandingPage from "./pages/LandingPage";
import FunFacts from "./pages/FunFacts"

import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>

     <Routes>
        <Route path="/" element={  <LandingPage/> } />
        <Route path="/AboutTataru" element={ <AboutTataru/> } />
        <Route path="/FunFacts" element={ <FunFacts/> } />
       
      
      </Routes>
        
   
        
    </div> 
  );
}

export default App;