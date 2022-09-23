/* Image and Style */
import FooterList_Style from "./FooterList_Style";

/* Components */
import FooterListItem from "./FooterListItem/FooterListItem" ;
import Footer_Items from "../Footer_Items";







const FooterList = () => {

  const items = Footer_Items()
  const style = FooterList_Style();



  return (
    <figure className={  style.Container  }>


      
      <figure className={  style.ContainerSection  }>
        {  items.map(  (  item, key  ) => {
          return (
            <FooterListItem 
              key={  key  } 
              item={  item  } 
            />
          )
        })}
      </figure>



    </figure>
  )
}

export default FooterList;