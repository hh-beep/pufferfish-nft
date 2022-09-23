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



    </Routes>
  );
}

export default App;
