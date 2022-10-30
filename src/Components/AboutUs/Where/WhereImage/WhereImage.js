/* Image */
import MapIcon from "../../../../Images/Icons/map.svg" 

/* Style */
import WhereImage_Style from "./WhereImage_Style";





const style = WhereImage_Style();





const WhereImage = () => {
  return (
    <figure className={  style.Container  }>
      <img 
        alt="Location Point"
        src={  MapIcon  }
        className={  style.ContainerImage  }
      />
    </figure>
  )
}

export default WhereImage;