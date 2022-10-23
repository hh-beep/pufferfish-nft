/* Style */
import CarrouselArea_Style from './CarrouselArea_Style';

/* Router Dom */
import {  Link  } from "react-router-dom"

/* Components */
import Carrousel from "./Carrousel/Carrousel";





const style = CarrouselArea_Style();





const CarrouselArea = ({  infos  }) => {
  return (
    <section className={  style.Container  }>


        <section>
          <h2 className={  style.tittle  }>Our nft's collections</h2>
        </section>

        <Carrousel 
          itemsInfos={  infos  } 
        />

        <Link to="/BestItems">
          <h2 className={  style.seeMore + " HoverCursor seeMore "  }>Wanna see the best items from each collection?</h2>
        </Link>



      </section>
    )
}

export default CarrouselArea;