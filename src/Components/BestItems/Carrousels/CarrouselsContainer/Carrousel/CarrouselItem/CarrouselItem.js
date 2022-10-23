/* Router Dom */
import {  Link  } from "react-router-dom"

/* Style */
import CarrouselItem_Style from "./CarrouselItem_Style";

/* Components */
import CarrouselItemImage from "./CarrouselItemImage/CarrouselItemImage";
import CarrouselItemName from "./CarrouselItemName/CarrouselItemName";





const style = CarrouselItem_Style();





const CarrouselItem = ({  item  }) => {
  return (
    <Link
      to="/Item"
      state={{
        item: item,
      }}
      className={  style.Container + "CarrouselCard HoverCursor "   }
    >
      


      <CarrouselItemImage 
        image={  item.imageURL  }
      />
        
      <CarrouselItemName 
        name={  item.name  }
      />



    </Link>
  )
}

export default CarrouselItem;