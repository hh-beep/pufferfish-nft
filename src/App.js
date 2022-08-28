import { 
  Routes, 
  Route,
} from "react-router-dom";

/* Components */
import Home from "./Components/Home/Home";
import Items from "./Components/Items/Item";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={  <Home />  }/>
      <Route path="/Items" element={  <Items />  }/>
    </Routes>
  );
}

export default App;
