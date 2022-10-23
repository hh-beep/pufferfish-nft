/* React */
import { 
  useState,
  useEffect,
} from "react";

/* Router Dom */
import {  useLocation  } from "react-router-dom"

/* Components */
import Header from "./Header/Header";
import Item from "./Item/Item";

/* Style */
import Collection_Style from "./Collection_Style";





const style = Collection_Style();





const Collection = ({  database  }) => {

  const {  collectionName  } = useLocation().state;
  const [collection, setCollection] = useState([])



  useEffect(() => {
    setCollection(Object.values(  database[collectionName]  ))
  }, [])



  return (
    <section className={  style.Container  }>
      



      <Header collection={  collectionName  }/>

      <section className={  style.ContainerList  }>
        {collection.map((  item, key  ) => {
          return (
            <Item 
              key={key} 
              item={item} 
            />
          )
        })}
      </section>



    </section>
  )
}

export default Collection;