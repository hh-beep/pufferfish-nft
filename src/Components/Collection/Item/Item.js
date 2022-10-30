/* Router dom */
import {  Link  } from "react-router-dom";

/* Components */
import ItemImage from "./ItemImage/ItemImage";
import ItemName from "./ItemName/ItemName";

/* Style */
import Item_Style from "./Item_Style";





const style = Item_Style();





const Item = ({  item  }) => {
  return (
    <Link 
      className={  style.Container + " CarrouselCard HoverCursor "  }
      to="/Item"
      state={{
        item: item,
      }}  
    >
      


      <ItemImage
        image={  item.imageURL  }
      />

      <ItemName 
        name={  item.name  }
      />



    </Link>
  )
}

export default Item;