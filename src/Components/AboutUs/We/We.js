/* Components */
import WeText from "./WeText/WeText";
import WeImage from "./WeImage/WeImage";
import WeTittle from "./WeTittle/WeTittle";

/* Style */
import We_Style from "./We_Style"; 





const style = We_Style();





const We = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>



      <WeImage />

      <section className={  style.ContainerSectionBox  }>


        <WeTittle />

        <WeText />


      </section>



      </section>
    </section>
  )
}

export default We;