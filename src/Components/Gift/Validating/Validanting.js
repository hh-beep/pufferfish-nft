/* Components */
import ValidatingText from "./ValidatingText/ValidatingText";
import ValidatingImage from "./ValidatingImage/ValidatingImage";
import ValidatingTittle from "./ValidatingTittle/ValidatingTittle";

/* Style */
import Validating_Style from "./Validating_Style";





const style = Validating_Style();





const Validating = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>



        <ValidatingImage />

        <section className={  style.ContainerSectionBox  }>


          <ValidatingTittle />

          <ValidatingText />


        </section>



      </section>
    </section>
  )
}

export default Validating;