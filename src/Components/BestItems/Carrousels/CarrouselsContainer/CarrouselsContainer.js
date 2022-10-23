/* Components */
import Name from "./Name/Name";
import Button from "./Button/Button";
import Carrousel from "./Carrousel/Carrousel";

/* Style */
import CarrouselsContainer_Style from "./CarrouselsContainer_Style";





const style = CarrouselsContainer_Style();





const CarrouselsContainer = ({  database  }) => {
  
  console.log(database)

  return (
    <section className={  style.Container  }>



      <Name name={  database.name  } />

      <Carrousel 
        items={  Object.values(database.items)  }
      />

      <Button 
        collection={  database.collection  }
      />



    </section>
  )
}

export default CarrouselsContainer;