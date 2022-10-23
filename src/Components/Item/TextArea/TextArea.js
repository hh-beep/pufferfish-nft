/* Components */
import TextAreaName from "./TextAreaName/TextAreaName";
import TextAreaDescription from "./TextAreaDescription/TextAreaDescription";

/* Style */
import TextArea_Style from "./TextArea_Style";





const style = TextArea_Style();





const TextArea = ({  name, collection, randomText, description  }) => {
  return (
    <section className={  style.Container  }>



      <TextAreaName 
        name={  name  }
        collection={  collection  }
      />

      <TextAreaDescription 
        randomText={  randomText  }
        description={  description  }
      />



    </section>
  )
}

export default TextArea;