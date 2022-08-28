/* Style */
import TextStyle from "./TextStyle"



const Text = () => {
  
  const style = TextStyle()

  
  return (
    <section className={  style.section  }>
      <h1 className={  style.sectionText  }>Our main social media</h1>
    </section>
  )
}

export default Text;
