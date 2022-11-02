/* React */
import { 
  useEffect, 
  useState
} from "react";

/* Router Dom */
import { 
  Routes, 
  Route,
} from "react-router-dom";

/* Components */
import Home from "./Components/Home/Home";
import Item from "./Components/Item/Item";
import Gift from "./Components/Gift/Gift";
import AboutUs from "./Components/AboutUs/AboutUs";
import BestItems from "./Components/BestItems/BestItems";
import Collection from "./Components/Collection/Collection";

/* Firebase */
import {
  getDatabase,
  ref, 
  onValue
} from "firebase/database"






const App = () => {
  
  const [dbValue, setDbValue] = useState(undefined)
  
  
  useEffect(() => {
    const dbRef = ref(  getDatabase(), "/"  )

    onValue(  dbRef, snap => {
      setDbValue(  snap.val()  )
    })
  }, [])
  
  
  return (
    <Routes>



      <Route 
        path="/" 
        element={
          <Home 
            CarrouselInfos={  dbValue !== undefined ? dbValue.Carrousel : {}  }
          />  
        }
      />

      <Route 
        path="/Item"
        element={  <Item />  }
      />

      <Route 
        path="/Gift"
        element={  <Gift />  }
      />

      <Route 
        path="/AboutUs"
        element={  <AboutUs />  }
      />

      <Route 
        path="/BestItems"
        element={
          <BestItems 
            database={  dbValue !== undefined ? dbValue.Best : {}  }
          />
        }
      />

      <Route 
        path="/Collection"
        element={
          <Collection 
            database={  dbValue !== undefined ? dbValue.Items : {}  }
          />
        }
      />



    </Routes>
  );
}

export default App;
