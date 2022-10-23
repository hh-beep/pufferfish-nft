/* Router Dom */
import {  Link  } from "react-router-dom";

/* Style */
import Button_Style from "./Button_Style";





const style = Button_Style();





const Button = ({  collection  }) => {
  return (
    <section className={  style.Container  }> 
      <Link 
        to="/Collection"
        state={{
          collectionName: collection
        }}
        className={  style.ContainerButton + " HoverCursor seeMore "  }
      >
        See more items about {  collection  } collection
      </Link>
    </section>
  )
}

export default Button;