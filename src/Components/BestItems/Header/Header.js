/* Style */
import Header_Style from "./Header_Style";




const style = Header_Style();





const Header = () => {
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>
        Best items from each collection
      </h1>
    </section>
  )
}

export default Header;