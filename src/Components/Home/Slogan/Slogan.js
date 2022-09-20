/* Components */
import SloganImage from "./SloganImage/SloganImage";
import SloganText from "./SloganText/SloganText";

/* Style */
import Slogan_Style from "./Slogan_Style";





const style = Slogan_Style();





const Slogan = () => {
	return (
    <section className={  style.container  }>
      <section className={  style.containerSection  }>



      <SloganImage />

      <SloganText />



      </section>
    </section>
  )
}

export default Slogan;
