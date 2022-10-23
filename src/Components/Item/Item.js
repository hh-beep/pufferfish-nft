/* Router Dom */
import { useLocation } from "react-router-dom";

/* Style */
import Item_Style from "./Item_Style";

/* Components */
import Image from "./Image/Image";
import Button from "./Button/Button";
import TextArea from "./TextArea/TextArea";





const style = Item_Style();





const Item = () => {


  const {  item  } = useLocation().state; 



  return (
    <section className={  style.Container + "overflow-x-hidden"  }>
      <section className={  style.ContainerSection  }>



        <Image 
          image={  item.imageURL  }
        />

        <section className={  style.ContainerSectionBox  }>
          <TextArea 
            name={  item.name  }
            collection={  item.collection  }
            randomText={  item.randomText  }
            description={  item.description  }
          />

          <Button 
            opensea={  item.opensea  }
          />
        </section>


      </section>
    </section>
  )
}

export default Item;