/* Slider */
import { 
  Swiper, 
  SwiperSlide 
} from "swiper/react";
import { 
  Autoplay,
  Navigation, 
  Pagination, 
} from "swiper";

/* Style */
import Carrousel_Style from "./Carrousel_Style";

/* Component */
import CarrouselItem from "./CarrouselItem/CarrouselItem";





const style = Carrousel_Style();





const Carrousel = ({  itemsInfos  }) => {
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
        },
        1024: {
          slidesPerView: 2,
        }
      }}
    >



      {  itemsInfos.map(  (  item, key  ) => {
        return (
          <SwiperSlide 
            className={  style.SwiperSlide  }
            key={  key  }
          >


            <CarrouselItem 
              item={  item  }
            />


          </SwiperSlide>
        )
      })}



    </Swiper>
  )
}

export default Carrousel;