/* Style */
import WelcomeTittle_Style from "./WelcomeTittle_Style";





const style = WelcomeTittle_Style();





const WelcomeTittle = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>
        Help Page
      </h1>
    </section>
  )
}

export default WelcomeTittle;