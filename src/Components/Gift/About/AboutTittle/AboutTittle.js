/* Style */
import AboutTittle_Style from "./AboutTittle_Style";





const style = AboutTittle_Style(); 





const AboutTittle = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>
        About your code
      </h1>
    </section>
  )
}

export default AboutTittle;