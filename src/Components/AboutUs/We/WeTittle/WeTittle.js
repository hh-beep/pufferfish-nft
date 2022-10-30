/* Style */
import WeTittle_Style from "./WeTittle_Style";





const style = WeTittle_Style();





const WeTittle = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>
        More about our Project
      </h1>
    </section>
  )
}

export default WeTittle;