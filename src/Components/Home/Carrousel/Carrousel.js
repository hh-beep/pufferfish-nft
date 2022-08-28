/* Style */
import CarrouselStyle from './CarrouselStyle';

import {  Link  } from "react-router-dom"


/* Slider */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"



/* Components */
import Item from './Item/Item';
import CarrouselItems from './CarrouselItems';






const Carrousel = () => {
  
  const style = CarrouselStyle();
  const items = CarrouselItems()



  return (
    <section className={  style.Container  }>


        <section>
          <h1 className={  style.tittle  }>Some of ours nfts</h1>
        </section>


        <Swiper
          modules={[  Navigation, Pagination, Autoplay  ]}
          navigation={  true  }
          pagination={{  clickable: true  }}
          autoplay={{  delay: '7500'  }}
          loop={  true  }
          slidesPerView={  1  }
          spaceBetween={ 50 }
          className={" mySwiper " + style.Swiper}
        >
          {items.map(  item => {
            return (
              <SwiperSlide key={  item.key  }>

                <Item 
                  item={  item  }
                />

              </SwiperSlide>
            )
          })}
        </Swiper>


        <Link to="/Items">
          <h1 className={  style.seeMore + " HoverCursor seeMore "  }>See more Items</h1>
        </Link>


      </section>
    )
}

export default Carrousel;