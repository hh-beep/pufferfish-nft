/* Components */
import Image from "./Image/Image";
import Text from "./Text/Text";

/* Style */
import NewStyle from "./NewStyle";




const New = () => {
  
	const style = NewStyle();

	return (
    <section className={  style.container  }>
      <section className={  style.containerSection  }>

      <Image />

      <Text />


      </section>
    </section>
  )
}

export default New;
