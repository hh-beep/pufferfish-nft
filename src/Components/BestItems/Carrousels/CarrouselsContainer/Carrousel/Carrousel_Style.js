const sm = " h-5/6 w-full "
const md = " md:h-4/6 md:w-11/12 "





function Carrousel_Style() {
  return {
    Swiper: 
      " bg-black flex flex-row items-center my-12 " +
        sm +
        md ,



    SwiperSlide:  
      " flex justify-around items-center "
  } 
}

export default Carrousel_Style;