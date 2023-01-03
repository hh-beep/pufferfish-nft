/* Image */
import Logo from "../../../Images/Logo.svg";

/* style */
import NotionLogo_Style from "./NotionLogo_Style"; 





const style = NotionLogo_Style();





const NotionLogo = () => {
  return (
    <section className={  style.Container  }>


      <img 
        className={  style.ContainerImage  }
        src={  Logo  }
      />
    
    
    </section>
  )
}

export default NotionLogo;