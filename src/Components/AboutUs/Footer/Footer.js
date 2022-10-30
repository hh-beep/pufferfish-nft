/* Style */
import Footer_Style from "./Footer_Style";

/* Components */
import FooterItem from "./FooterItem/FooterItem";

/* Items */
import Footer_Items from "./Footer_Items";





const style = Footer_Style();





const Footer = () => {

  const items = Footer_Items();


  return (
    <section className={  style.Container  }>
      <section className={  style.ContainerSection  }>



        {items.map((  item, key  ) => {
          return (
            <FooterItem
              key={  key  } 
              item={  item  }
            />
          )
        })}



      </section>
    </section>
  )
}

export default Footer;