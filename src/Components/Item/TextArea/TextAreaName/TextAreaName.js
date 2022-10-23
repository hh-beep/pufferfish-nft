/* Style */
import TextAreaName_Style from "./TextAreaName_Style";





const style = TextAreaName_Style();





const TextAreaName = ({  name, collection  }) => {
  return (
    <section className={  style.Container  }>



      <h1 className={  style.ContainerName  }>
        {  name  }
      </h1>

      <h3 className={  style.ContainerCollection  }>
        {  collection  }
      </h3>
    
    
    
    </section>
  )
}

export default TextAreaName;