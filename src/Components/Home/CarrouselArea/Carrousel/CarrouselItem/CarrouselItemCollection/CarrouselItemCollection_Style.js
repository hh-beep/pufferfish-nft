const sm = {
  container: " h-2/5 w-full ",
  tittle: " text-2xl text-center ",
}
const md = {
  container: " md:w-5/6 ",
  tittle: " md:text-3xl ",
}





function CarrouselItemCollection_Style() {
  return {
    container:  
      " flex justify-around flex-col " +
        sm.container +
        md.container ,


    tittle: 
      " text-white font-bold " +
        sm.tittle + 
        md.tittle ,
  }
}

export default CarrouselItemCollection_Style;