/* Style */
import WhereTittle_Style from "./WhereTittle_Style";





const style = WhereTittle_Style(); 





const WhereTittle = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>
        Where we are
      </h1>
    </section>
  )
}

export default WhereTittle;