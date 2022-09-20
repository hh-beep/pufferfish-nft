/* Image */
import Logo from "../../../../Images/Logo.svg";

/* Style */
import BannerLogo_Style from "./BannerLogo_Style";





const style = BannerLogo_Style();





const BannerLogo = () => {
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