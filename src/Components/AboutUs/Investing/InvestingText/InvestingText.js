/* Style */
import InvestingText_Style from "./InvestingText_Style";





const style = InvestingText_Style();





const InvestingText = () => {
  return (
    <section className={  style.Container  }>
      <p className={  style.ContainerText  }>
        The _PufferFish_nft is just the begining of a group of companys.
        We use the money we raise to invest in the future of the company and to finance other projects, such as JellyFish ( More about it next year ).
      </p>
    </section>
  )
}

export default InvestingText;