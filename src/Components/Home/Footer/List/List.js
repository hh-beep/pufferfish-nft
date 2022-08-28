/* Image and Style */
import Logo from "../../../../Images/Icons/OpenSea.svg" 
import ListStyle from "./ListStyle"

/* Components */
import Item from "./Item/Item" 
import FooterItems from "../FooterItems"







const List = () => {

  const items = FooterItems()
  const style = ListStyle();



  return (
    <figure className={  style.Container  }>
      <figure className={  style.ContainerPrincipal  }>


        <img 
          alt="Opensea link button"
          className={  style.ContainerPrincipalImage + " HoverCursor PrimaryIcon "  } 
          src={  Logo  } 
          onClick={() => {
            window.open("https://opensea.io/_PufferFish_", "blank")
          }}
        />


      </figure>
      

      <figure className={  style.ContainerSecondary  }>
        {items.map(  item => {
          return (
            <Item key={  item.key  } item={  item  } />
          )
        })}
      </figure>
    </figure>
  )
}

export default List;