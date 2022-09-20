const sm = {
  container: " hidden ",
  containerImage: "",
}
const md = {
  container: " md:flex md:w-7/12 ",
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
      " bg-p-white " +
        sm.containerImage +
        md.containerImage + 
        lg.containerImage ,
  }
}

export default CarrouselItemImage_Style