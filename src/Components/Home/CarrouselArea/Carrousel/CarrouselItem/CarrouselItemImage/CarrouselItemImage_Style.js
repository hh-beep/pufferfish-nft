const sm = {
  container: " flex h-3/5 ",
  containerImage: " h-full ",
}
const md = {
  container: " md:w-7/12 p-8 md:h-auto ",
  containerImage: "",
}
const lg = {
  container: " lg:w-6/12 ",
  containerImage: "",
}




function CarrouselItemImage_Style() {
  return {
    container: 
      " bg-p-white " + 
        sm.container +
        md.container + 
        lg.container ,

    


    containerImage: 
      " bg-p-white rounded-lg " +
        sm.containerImage +
        md.containerImage + 
        lg.containerImage ,
  }
}

export default CarrouselItemImage_Style