/* Style */
import TextStyle from "./TextStyle.js";


const Text = () => {
  
	const style = TextStyle();

	return (
    <section className={  style.section  }>
      <p className={  style.sectionText  }>Want a special and unique gift? Buy one of our nft and find out</p>
    </section>
  )
}

export default Text;
