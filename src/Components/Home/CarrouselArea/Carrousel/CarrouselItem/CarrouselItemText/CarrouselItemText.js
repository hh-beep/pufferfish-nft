/* Style */
import CarrouselItemText_Style from "./CarrouselItemText_Style";





const style = CarrouselItemText_Style();





const CarrouselItemText = ({  description, randomText  }) => {
  return (
    <section className={  style.section  }>
      
      
      
      <p className={  style.description  }>
        {  description  }
      </p>

      <p className={  style.randomText  }>
        {  randomText  }
      </p>
    
    
    
    </section>
  )
}

export default CarrouselItemText;