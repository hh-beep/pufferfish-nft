/* Image */
import InvestingIcon from "../../../../Images/Icons/InvestingIcon.svg"

/* Style */
import InvestingImage_Style from "./InvestingImage_Style";





const style = InvestingImage_Style();





const InvestingImage = () => {
  return (
    <figure className={  style.Container  }>
      <img 
        alt="investing icon"
        src={  InvestingIcon  }
        className={  style.ContainerImage  }
      />
    </figure>
  )
}

export default InvestingImage;