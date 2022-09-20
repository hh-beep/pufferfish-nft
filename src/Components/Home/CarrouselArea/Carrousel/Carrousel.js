/* Slider */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

/* Style */
import Carrousel_Style from "./Carrousel_Style";

/* Component */
import CarrouselItem from "./CarrouselItem/CarrouselItem";





const style = Carrousel_Style();





const Carrousel = ({  itemsInfos  }) => {
  return (
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



      {  itemsInfos.map(  item => {
        return (
          <SwiperSlide key={  item.key  }>


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