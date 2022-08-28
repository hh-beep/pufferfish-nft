/* Styles */
import ItemTextstyle from "./ItemTextStyle";

/* Components */
import Tittle from "./Tittle/Tittle";
import Text from "./Text/Text";





const ItemText = ({  item  }) => {

  const style = ItemTextstyle();

  return (
    <section className={  style.container  }>

      <Tittle 
        tittle={  item.tittle  }
        collection={  item.collection  }
      />


      <Text 
        description={  item.description  }
        randomText={  item.randomText  }
      />



    </section>
  )
}

export default ItemText;