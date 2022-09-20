/* Style */
import CarrouselItem_Style from "./CarrouselItem_Style";

/* Components */
import CarrouselItemImage from "./CarrouselItemImage/CarrouselItemImage";
import CarrouselItemTittle from "./CarrouselItemTittle/CarrouselItemTittle";
import CarrouselItemText from "./CarrouselItemText/CarrouselItemText";





const style = CarrouselItem_Style();





const CarrouselItem = ({  item  }) => {
  return (
    <section className={  style.container   }>
      


      <CarrouselItemImage 
        image={  item.image  }
      />

      <section className={  style.containerTextarea  }>
        

        <CarrouselItemTittle 
          tittle={  item.tittle  }
          collection={  item.collection  }
        />
        <CarrouselItemText 
          description={  item.description  }
          randomText={  item.randomText  }
        />


      </section>



    </section>
  )
}

export default CarrouselItem;