/* Icon */
import keyIcon from "../../../../Images/Icons/keyIcon.svg"

/* Style */
import AboutImage_Style from "./AboutImage_Style";





const style = AboutImage_Style();





const AboutImage = () => {
  return (
    <figure className={  style.Container  }>
      <img 
        alt="Key Icon"
        src={  keyIcon  }
        className={  style.ContainerImage  }
      />
    </figure>
  )
}

export default AboutImage;