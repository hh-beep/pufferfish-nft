/* Icon */
import helpIcon from "../../../../Images/Icons/helpIcon.svg"

/* Style */
import WelcomeImage_Style from "./WelcomeImage_Style";





const style = WelcomeImage_Style();





const WelcomeImage = () => {
  return (
    <figure className={  style.Container  }>
      <img 
        alt="help circle"
        src={  helpIcon  }
        className={  style.ContainerImage  }
      />
    </figure>
  )
}

export default WelcomeImage;