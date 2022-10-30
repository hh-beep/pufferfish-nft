/* Components */
import WhereText from "./WhereText/WhereText";  
import WhereImage from "./WhereImage/WhereImage";
import WhereTittle from "./WhereTittle/WhereTittle";

/* Style */
import Where_Style from "./Where_Style";





const style = Where_Style();





const Where = () => {
  return (
    <section className={  style.Container   }>
      <section className={  style.ContainerSection  }>


        <WhereImage />
        
        <section className={  style.ContainerSectionBox  }>


          <WhereTittle />
          
          <WhereText />

          
        </section>



      </section>
    </section>
  )
}

export default Where;