/* Style */
import ItemName_Style from "./ItemName_Style";





const style = ItemName_Style();





const ItemName = ({  name  }) => {
  return (
    <section className={  style.Container  }>
      <h2 className={  style.ContainerName  }>
        {  name  }
      </h2>
    </section>
  )
}

export default ItemName;