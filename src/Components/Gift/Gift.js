/* React */
import { useEffect } from "react";

/* Components */
import About from "./About/About";
import Footer from "./Footer/Footer";
import Welcome from "./Welcome/Welcome";
import Validating from "./Validating/Validanting";


/* Style */
import Gift_Style from "./Gift_Style";





const style = Gift_Style(); 





const Gift = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <section className={  style.Container  }>
      


      <Welcome />

      <About />

      <Validating />

      <Footer />



    </section>
  )
}

export default Gift;