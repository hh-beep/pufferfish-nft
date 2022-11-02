/* Style */
import AboutText_Style from "./AboutText_Style";





const style = AboutText_Style();





const AboutText = () => {
  return (
    <section className={  style.Container  }>
      <p className={  style.ContainerText  }>
        After buying one of ours nft, you receive a special code.
        Each nft have a special code, we create it to prevent anyone to request the gift without buying    any nft.
        The code is created to you send us it and request your gift.
        If you have the code but dont want the gift, contact us to deactivate it. 
      </p>
    </section>
  )
}

export default AboutText;