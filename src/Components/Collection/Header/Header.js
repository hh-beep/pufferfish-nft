/* Style */
import Header_Style from "./Header_Style";





const style = Header_Style();





const Header = ({  collection  }) => {
  return (
    <section className={  style.Container  }>
      <h2 className={  style.ContainerTittle  }>
        {  collection  } Collection
      </h2>
    </section>
  )
}

export default Header;