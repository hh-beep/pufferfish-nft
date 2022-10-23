/* Style */
import CarrouselItemName_Style from "./CarrouselItemName_Style";





const style = CarrouselItemName_Style();





const CarrouselItemName = ({  name  }) => {
  return (
    <section className={  style.container  }>



      <h1 className={  style.tittle  }>
        {  name  }
      </h1>



    </section>
  )
} 

export default CarrouselItemName; 