/* Style */
import FooterListItem_Style from "./FooterListItem_Style";




const FooterListItem = ({  item  }) => {
  
  const style = FooterListItem_Style();  
  

  
  return (
    <figure  
      className={  style.Container + " FooterItemIcon HoverCursor "  }
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

export default FooterListItem;