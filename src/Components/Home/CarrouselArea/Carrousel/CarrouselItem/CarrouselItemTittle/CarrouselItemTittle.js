/* Style */
import CarrouselItemTittle_Style from "./CarrouselItemTittle_Style";





const style = CarrouselItemTittle_Style();





const CarrouselItemTittle = ({  tittle, collection  }) => {
  return (
    <section className={  style.container  }>



      <h1 className={  style.tittle  }>
        {  tittle  }
      </h1>
      
      <p className={  style.collection  }>
        Pufferfish {  collection  } collection
      </p>
    
    
    
    </section>
  )
} 

export default CarrouselItemTittle; 