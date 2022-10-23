/* Router Dom */
import {  Link  } from "react-router-dom"

/* Style */
import CarrouselItem_Style from "./CarrouselItem_Style";

/* Components */
import CarrouselItemImage from "./CarrouselItemImage/CarrouselItemImage";
import CarrouselItemCollection from "./CarrouselItemCollection/CarrouselItemCollection";





const style = CarrouselItem_Style();





const CarrouselItem = ({  item  }) => {
  return (
    <Link
      to="/Collection"
      state={{
        collectionName: item.name,
      }}
      className={  style.Container + "CarrouselCard HoverCursor "   }
    >
      


      <CarrouselItemImage 
        image={  item.imageURL  }
      />
        
      <CarrouselItemCollection 
        collection={  item.collection  }
      />



    </Link>
  )
}

export default CarrouselItem;