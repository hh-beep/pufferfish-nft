/* Style */
import Name_Style from "./Name_Style";





const style = Name_Style();





const Name = ({  name  }) => {
  return (
    <section className={  style.Container  }>
      <h2 className={  style.ContainerName  }>
        {  name  }
      </h2>
    </section>
  )
}

export default Name;