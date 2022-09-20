/* Style */
import Footer_Style from "./Footer_Style"

/* Components */
import FooterTittle from "./FooterTittle/FooterTittle"
import FooterList from "./FooterList/FooterList"




const Footer = () => {

  const style = Footer_Style();


  return (
    <section className={  style.Footer  }>
      <section className={  style.FooterContainer  }>



        <FooterTittle />

        <FooterList />



      </section>
    </section>
  )
}

export default Footer;