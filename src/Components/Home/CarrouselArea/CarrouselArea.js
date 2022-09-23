/* Style */
import CarrouselArea_Style from './CarrouselArea_Style';

/* Router Dom */
import {  Link  } from "react-router-dom"

/* Components */
import Carrousel from "./Carrousel/Carrousel";
import Carrousel_Infos from './Carrousel_Infos';





const style = CarrouselArea_Style();





const CarrouselArea = ({  infos  }) => {
  return (
    <section className={  style.Container  }>



        <section>
          <h1 className={  style.tittle  }>Some of ours nfts</h1>
        </section>

        <Carrousel 
          itemsInfos={  infos  } 
        />

        <Link to="/Best">
          <h1 className={  style.seeMore + " HoverCursor seeMore "  }>Wanna see the best items from each collection?</h1>
        </Link>



      </section>
    )
}

export default CarrouselArea;