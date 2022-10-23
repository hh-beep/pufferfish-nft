/* Components */
import CarrouselsContainer from "./CarrouselsContainer/CarrouselsContainer";

/* Style */
import Carrousels_Style from "./Carrousels_Style";

const style = Carrousels_Style();





const Carrousels = ({  database  }) => {
  return (
    <section className={  style.Container  }>



      <CarrouselsContainer 
        database={  database.Shirts  } 
      />

      <CarrouselsContainer 
        database={  database.Bottles  } 
      />

      <CarrouselsContainer 
        database={  database.Mugs  } 
      />



    </section>
  )
}

export default Carrousels;