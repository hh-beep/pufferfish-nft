/* Style */
import ItemImageStyle from "./ItemImageStyle";




const ItemImage = ({  image  }) => {

  const style = ItemImageStyle();


  return (
    <figure className={  style.container  }>
      
      
      <img 
        alt="Pufferfish nft item"
        src={  image  }
        className={  style.containerImage  }
      />
    
    
    </figure>
  )
}

export default ItemImage;