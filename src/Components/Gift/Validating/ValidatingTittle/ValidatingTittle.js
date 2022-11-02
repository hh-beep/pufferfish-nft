/* Style */
import ValidatingTittle_Style from "./ValidatingTittle_Style";





const style = ValidatingTittle_Style();





const ValidatingTittle = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>
        Validating your code
      </h1>
    </section>
  )
}

export default ValidatingTittle;