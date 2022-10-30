/* Components */
import We from "./We/We";
import Where from "./Where/Where";
import Footer from "./Footer/Footer";
import Investing from "./Investing/Investing";

/* Style */
import AboutUs_Style from "./AboutUs_Style";





const style = AboutUs_Style();





const AboutUs = () => {
  return (
    <section className={  style.Container  }>



      <We />

      <Investing />

      <Where />

      <Footer />



    </section>
  )
}

export default AboutUs;