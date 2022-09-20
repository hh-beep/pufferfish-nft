/* Style */
import SloganText_Style from "./SloganText_Style.js";





const style = SloganText_Style();





const SloganText = () => {
	return (
    <section className={  style.section  }>



      <p className={  style.sectionText  }>
        Buy a <span className="stroke"> NFT</span>
      </p>

      <p className={  style.sectionText  }>
        Win a <span className="stroke"> GIFT</span>
      </p>



    </section>
  )
}

export default SloganText;
