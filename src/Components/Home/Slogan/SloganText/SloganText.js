/* Router Dom */
import {  Link  } from "react-router-dom";

/* Style */
import SloganText_Style from "./SloganText_Style.js";





const style = SloganText_Style();





const SloganText = () => {
	return (
    <section className={  style.Container  }>


      <h2 className={  style.ContainerTittle    }>Requesting your gift</h2>

      <p className={  style.ContainerText  }>
        After buying your nft, you need to send us your secret code on our instagram 
        or twitter account to send the giftk to you. 
        <Link 
          to="/Gift" 
          className={  style.ContainerText + " linkText "  }
        >
          For more tips and intructions, 
          visit our gift help page
        </Link> 
      </p>



    </section>
  )
}

export default SloganText;
