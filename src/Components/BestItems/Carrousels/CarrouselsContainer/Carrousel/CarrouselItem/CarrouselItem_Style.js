const sm = " w-full h-4/5 mx-auto rounded-lg p-8 items-center "
const md = " md:w-3/5 "
const lg = " lg:w-4/3 "





function CarrouselItem_Style() {
  return {
    Container: 
      " flex flex-col justify-around border-4 border-dgrey rounded-lg " +
        lg +
        md +
        sm ,  
  }
}

export default CarrouselItem_Style;