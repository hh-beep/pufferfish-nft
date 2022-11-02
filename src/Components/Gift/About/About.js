/* Components */
import AboutText from "./AboutText/AboutText";
import AboutImage from "./AboutImage/AboutImage";
import AboutTittle from "./AboutTittle/AboutTittle";

/* Style */
import About_Style from "./About_Style";





const style = About_Style();





const About = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>



        <section className={  style.ContainerSectionBox  }>



          <AboutTittle />
          
          <AboutText />


        </section>

        <AboutImage />



      </section>
    </section>
  )
}

export default About;