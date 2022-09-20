/* Style */
import CarrouselItemImage_Style from "./CarrouselItemImage_Style";





const style = CarrouselItemImage_Style();





const CarrouselItemImage = ({  image  }) => {
  return (
    <figure className={  style.container  }>
      
      
      <img 
        alt="Pufferfish nft item"
        src={  image  }
        className={  style.containerImage  }
      />
    
    
    </figure>
  )
}

export default CarrouselItemImage;