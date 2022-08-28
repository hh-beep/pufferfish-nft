  /* Components */
import ItemImage from "./ItemImage/ItemImage";
import ItemText from "./ItemText/ItemText";

/* Style */
import ItemStyle from "./ItemStyle";



const Item = ({  item  }) => {
  
  const style = ItemStyle()

  return (
    <section className={  style.Item   }>
      
      <ItemImage 
        image={  item.image  }
      />

      <ItemText 
        item={  item  }
      />
    </section>
  )
}

export default Item;