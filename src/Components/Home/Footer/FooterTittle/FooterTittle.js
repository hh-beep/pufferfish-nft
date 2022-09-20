/* Style */
import FooterTittle_Style from "./FooterTittle_Style"



const FooterTittle = () => {
  
  const style = FooterTittle_Style()

  
  return (
    <section className={  style.section  }>
      <h1 className={  style.sectionText  }>Our main social media</h1>
    </section>
  )
}

export default FooterTittle;
