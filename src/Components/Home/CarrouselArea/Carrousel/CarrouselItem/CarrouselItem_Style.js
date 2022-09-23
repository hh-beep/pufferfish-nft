const sm = {
  container: " w-full h-5/6 mx-0 px-8 flex-col ",
  containerTextarea: " w-5/6 h-5/6 px-8 ",
}
const md = {
  container: " md:w-5/6 md:mx-auto py-4 my-4 md:flex-row ",
  containerTextarea: " md:w-5/12 px-0 ",
}
const lg = {
  container: "  lg:w-2/3",
  containerTextarea: " lg:w-5/12 ",
}





function CarrouselItem_Style() {
  return {
    container: 
      " flex justify-between items-center bg-p-white rounded-lg " +
        lg.container +
        md.container +
        sm.container ,


    containerTextarea: 
      " bg-p-white flex flex-col mx-auto justify-between " + 
        sm.containerTextarea + 
        md.containerTextarea + 
        lg.containerTextarea ,    
  }
}

export default CarrouselItem_Style;