/* Router Dom */
import {  Link  } from "react-router-dom"

/* Style */
import CarrouselItem_Style from "./CarrouselItem_Style";

/* Components */
import CarrouselItemImage from "./CarrouselItemImage/CarrouselItemImage";
import CarrouselItemName from "./CarrouselItemName/CarrouselItemName";
import CarrouselItemText from "./CarrouselItemText/CarrouselItemText";





const style = CarrouselItem_Style();





const CarrouselItem = ({  item  }) => {
  return (
    <Link
      to="/Item"
      state={{
        itemInfos: item,
      }}
      className={  style.container + "CarrouselCard HoverCursor "   }
    >
      


      <CarrouselItemImage 
        image={  item.imageURL  }
      />

      <section className={  style.containerTextarea  }>
        

        <CarrouselItemName 
          name={  item.name  }
          collection={  item.collection  }
        />
        <CarrouselItemText 
          description={  item.description  }
          randomText={  item.randomText  }
        />


      </section>



    </Link>
  )
}

export default CarrouselItem;