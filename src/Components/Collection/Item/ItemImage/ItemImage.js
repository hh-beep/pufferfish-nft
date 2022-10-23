/* Style */
import ItemImage_Style from "./ItemImage_Style";





const style = ItemImage_Style();





const ItemImage = ({  image  }) => {
  return (
    <figure className={  style.Container  }>
      <img 
        className={  style.ContainerImage  }
        src={  image  }
        alt="item icon"
      />
    </figure>
  )
}

export default ItemImage;