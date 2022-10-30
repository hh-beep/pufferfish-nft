/* Style */
import InvestingTittle_Style from "./InvestingTittle_Style";





const style = InvestingTittle_Style();





const InvestingTittle = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>
        On what you're investing
      </h1>
    </section>
  )
}

export default InvestingTittle;