/* Componets */
import WelcomeText from "./WelcomeText/WelcomeText";
import WelcomeImage from "./WelcomeImage/WelcomeImage";
import WelcomeTittle from "./WelcomeTittle/WelcomeTittle";

/* Style */
import Welcome_Style from "./Welcome_Style";





const style = Welcome_Style();





const Welcome = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>



        <WelcomeImage />
        
        <section className={  style.ContainerSectionBox  }>



          <WelcomeTittle />

          <WelcomeText />


        </section>



      </section>
    </section>
  )
}

export default Welcome;