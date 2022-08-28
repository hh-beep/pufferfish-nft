/* Style */
import FooterStyle from "./FooterStyle"

/* Components */
import Text from "./Text/Text"
import List from "./List/List"




const Footer = () => {

  const style = FooterStyle();


  return (
    <section className={  style.Footer  }>
      <section className={  style.FooterContainer  }>

      <Text />

      <List />

      </section>
    </section>
  )
}

export default Footer;