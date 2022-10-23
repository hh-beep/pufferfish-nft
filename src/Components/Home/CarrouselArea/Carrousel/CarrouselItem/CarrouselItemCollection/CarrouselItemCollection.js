/* Style */
import CarrouselItemCollection_Style from "./CarrouselItemCollection_Style";





const style = CarrouselItemCollection_Style();





const CarrouselItemCollection = ({  collection  }) => {
  return (
    <section className={  style.container  }>



      <h1 className={  style.tittle  }>
        {  collection  }
      </h1>



    </section>
  )
} 

export default CarrouselItemCollection; 