/* Router Dom */
import { useLocation } from "react-router-dom";

/* Style */
import Item_Style from "./Item_Style";

/* Components */
import ItemImage from "./ItemImage/ItemImage";
import ItemName from "./ItemName/ItemName";
import ItemText from "./ItemText/ItemText";





const style = Item_Style();





const Item = () => {

  const {  itemInfos  } = useLocation().state; 



  return (
    <section className={  style.Container + "overflow-x-hidden"  }>
      <section className={  style.ContainerSection  }>



        {/*<ItemImage 
          image={  itemInfos.imageURL  }
        />

        <section className={  style.ContainerSectionTextarea  }>
          <ItemName />

          <ItemText />
        </section>

         Button */}


      </section>
    </section>
  )
}

export default Item;