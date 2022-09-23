/* Style */
import CarrouselItemName_Style from "./CarrouselItemName_Style";





const style = CarrouselItemName_Style();





const CarrouselItemName = ({  name, collection  }) => {
  return (
    <section className={  style.container  }>



      <h1 className={  style.tittle  }>
        {  name  }
      </h1>
      
      <p className={  style.collection  }>
        Pufferfish {  collection  } collection
      </p>
    
    
    
    </section>
  )
} 

export default CarrouselItemName; 