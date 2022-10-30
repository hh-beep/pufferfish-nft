/* Components */
import InvestingText from "./InvestingText/InvestingText";
import InvestingImage from "./InvestingImage/InvestingImage";
import InvestingTittle from "./InvestingTittle/InvestingTittle";

/* Style */
import Investing_Style from "./Investing_Style";





const style = Investing_Style();





const Investing = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>



        <section className={  style.ContainerSectionBox  }>


          <InvestingTittle />

          <InvestingText />


        </section>

        <InvestingImage />


        
      </section>
    </section>
  )
}

export default Investing