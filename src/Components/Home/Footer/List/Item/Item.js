/* Style */
import ItemStyle from "./ItemStyle";




const Item = ({  item  }) => {
  
  const style = ItemStyle();  
  
  
  return (
    <figure 
      key={  item.key  } 
      className={  style.Container + " SecondaryIcon "  }
      onClick={() => {
        window.open(item.url, "blank")
      }}   
    >


      <img 
        alt={`Pufferfish other social midia ${item.name}`}
        className={  style.ContainerImage + " HoverCursor "  }
        src={  item.image  }
      />


    </figure>
  )
}

export default Item;