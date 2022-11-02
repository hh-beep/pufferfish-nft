/* React */
import {  useEffect  } from "react"

/* Components */
import We from "./We/We";
import Where from "./Where/Where";
import Footer from "./Footer/Footer";
import Investing from "./Investing/Investing";

/* Style */
import AboutUs_Style from "./AboutUs_Style";





const style = AboutUs_Style();





const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


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