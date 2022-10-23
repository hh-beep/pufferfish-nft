/* Style */
import FooterTittle_Style from "./FooterTittle_Style"



const FooterTittle = () => {
  
  const style = FooterTittle_Style()

  
  return (
    <section className={  style.section  }>
      <h1 className={  style.sectionText  }>Other plataforms with more content</h1>
    </section>
  )
}

export default FooterTittle;
