/* Icon */
import validatingIcon from "../../../../Images/Icons/validatingIcon.svg"

/* Style */
import ValidatingImage_Style from "./ValidatingImage_Style"; 





const style = ValidatingImage_Style();





const ValidatingImage = () => {
  return (
    <figure className={  style.Container  }>
      <img
        alt="Checkbox Icon"
        src={  validatingIcon  } 
        className={  style.ContainerImage  }
      />
    </figure>
  )
}

export default ValidatingImage;