/* Style */
import ValidatingText_Style from "./ValidatingText_Style";





const style = ValidatingText_Style(); 





const ValidatingText = () => {
  return (
    <section className={  style.Container  }>
      <p className={  style.ContainerText  }>
        To validate your code and receive your gift, you need to send us your opensea name and the code.
        You can send it through our instagram or twitter account.
        If your code is not validated, but you dont request your gift, please contact us.
      </p>
    </section>
  )
}

export default ValidatingText;