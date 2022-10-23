/* Image */
import people from "../../../../Images/Icons/people.svg"

/* Style */
import AboutUsImage_Style from "./AboutUsImage_Style";





const style = AboutUsImage_Style();





const AboutUsImage = () => {
  return (
    <figure className={  style.Container  }>
      <img 
        className={  style.ContainerImage  }
        alt="peoples icon"
        src={  people  }
      />
    </figure>
  )
}

export default AboutUsImage;