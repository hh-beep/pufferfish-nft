/* Router Dom */
import {  Link  } from "react-router-dom";

/* Style */
import AboutUsText_Style from "./AboutUsText_Style";





const style = AboutUsText_Style();





const AboutUsText = () => {
  return (
    <section className={  style.Container  }>



      <h2 className={  style.ContainerTittle  }>A little bit about us</h2>

      <p className={  style.ContainerText  }>
        We are a digital art company that creates and sells utility nft’s. 
        The peoples that buy our nft win a copy of that item in their home.
        <Link to="/AboutUs" className={  style.ContainerText + "linkText"  }>
          To know a little bit more about us, visit our about page
        </Link>
      </p>
    
    
    
    </section>
  )
}

export default AboutUsText;