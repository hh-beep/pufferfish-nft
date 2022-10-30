/* Image */
import PeopleIcon from "../../../../Images/Icons/people.svg"

/* Style */
import WeImage_Style from "./WeImage_Style";




const style = WeImage_Style();





const WeImage = () => {
  return (
    <figure className={  style.Container  }>
      <img 
        alt="Company Logo"
        src={  PeopleIcon  }
        className={  style.ContainerImage  }
      />
    </figure>
  )
}

export default WeImage