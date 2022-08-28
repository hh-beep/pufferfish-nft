/* Image and Style */
import Logo from "../../../../Images/Logo.svg"
import BannerLogoStyle from "./BannerLogoStyle";




const BannerLogo = () => {

  const style = BannerLogoStyle();

  return (
    <figure className={  style.Container  }>
      
      
      <img 
        alt="Pufferfish Main Logo (A pufferfish)"
        src={  Logo  }
        className={  style.ContainerImage  }
      />
    
    
    </figure>
  )
}

export default BannerLogo;