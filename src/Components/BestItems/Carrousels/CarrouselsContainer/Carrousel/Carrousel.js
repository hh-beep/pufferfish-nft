/* Swiper */
import { 
  Swiper, 
  SwiperSlide 
} from "swiper/react";
import { 
  Autoplay,
  Navigation, 
  Pagination, 
} from "swiper";

/* Components */
import CarrouselItem from "./CarrouselItem/CarrouselItem";

/* Style */
import Carrousel_Style from "./Carrousel_Style";





const style = Carrousel_Style();





const Carrousel = ({  items  }) => {
  return (
    <Swiper
      modules={[  Navigation, Pagination, Autoplay  ]}
      className={" mySwiper " + style.Swiper}
      pagination={{  clickable: true  }}
      autoplay={{  delay: '7500'  }}
      navigation={  true  }
      loop={  true  }
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }}
    >



      {items.map((  item, key  ) => {
        return (
          <SwiperSlide 
            key={  key  }
            className={  style.SwiperSlide  }
          >



            <CarrouselItem item={  item  } />



          </SwiperSlide>
        )
      })}



    </Swiper>
  )
} 

export default Carrousel;