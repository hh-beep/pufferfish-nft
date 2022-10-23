/* Components */
import AboutUsImage from "./AboutUsImage/AboutUsImage";
import AboutUsText from "./AboutUsText/AboutUsText";

/* Style */
import AboutUs_Style from "./AboutUs_Style";





const style = AboutUs_Style();





const AboutUs = () => {
  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>


        <AboutUsImage />

        <AboutUsText />



      </section>
    </section>
  )
}

export default AboutUs;