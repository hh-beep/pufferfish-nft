/* Style */
import CarrouselArea_Style from './CarrouselArea_Style';

/* Router Dom */
import {  Link  } from "react-router-dom"

/* Components */
import Carrousel from "./Carrousel/Carrousel";
import Carrousel_Infos from './Carrousel_Infos';





const style = CarrouselArea_Style();
const itemsInfos = Carrousel_Infos();





const CarrouselArea = () => {
  return (
    <section className={  style.Container  }>



        <section>
          <h1 className={  style.tittle  }>Some of ours nfts</h1>
        </section>

        <Carrousel 
          itemsInfos={  itemsInfos  } 
        />

        <Link to="/Items">
          <h1 className={  style.seeMore + " HoverCursor seeMore "  }>See more Items</h1>
        </Link>



      </section>
    )
}

export default CarrouselArea;