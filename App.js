import Home from "./pages/Home";

import SectionHome from "./components/SectionHome";
import SectionService from "./components/SectionService";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";


import './App.css';

function App() {
  return(

    <div>
      
      <SectionHome></SectionHome>

      <SectionService></SectionService>

      <SectionAbout></SectionAbout>

      <SectionContact></SectionContact>
      
      <Home></Home>

    </div>

    );
  
}


export default App;
