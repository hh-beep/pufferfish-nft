/* Style */
import TextAreaDescription_Style from "./TextAreaDescription_Style";





const style = TextAreaDescription_Style();





const TextAreaDescription = ({  description, randomText  }) => {
  return (
    <section className={  style.Container  }>



      <p className={  style.ContainerDescription  }>
        {  description  }
      </p>

      <p className={  style.ContainerRandomText  }>
        {  randomText  }
      </p>
    
    
    
    </section>
  )
}

export default TextAreaDescription;