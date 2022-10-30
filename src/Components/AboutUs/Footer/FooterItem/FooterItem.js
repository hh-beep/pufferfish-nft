/* Style */
import FooterItem_Style from "./FooterItem_Style";





const style = FooterItem_Style(); 





const FooterItem = ({  item  }) => {
  return (
    <figure  
      className={  style.Container + " FooterItemIcon HoverCursor "  }
      onClick={() => {
        window.open(item.url, "blank")
      }}   
    >


      <img 
        alt={`Pufferfish ${item.name}`}
        className={  style.ContainerImage + " HoverCursor "  }
        src={  item.image  }
      />


    </figure>
  )
}

export default FooterItem;