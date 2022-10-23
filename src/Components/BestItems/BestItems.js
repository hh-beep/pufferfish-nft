/* React */
import {
  useEffect
} from "react"


/* Components */
import Header from "./Header/Header";
import Carrousels from "./Carrousels/Carrousels";

/* Style */
import BestItems_Style from "./BestItems_Stytle";





const style = BestItems_Style();





const BestItems = ({  database  }) => {
  
  const defaultObject = {
    Shirts: [],
    Bottles: [],
    Mugs: [],
  }
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  
  return (
    <section className={  style.Container  }>



      <Header />

      <Carrousels
        database={  database !== undefined ? database : defaultObject  }
      />



    </section>
  )
}

export default BestItems;