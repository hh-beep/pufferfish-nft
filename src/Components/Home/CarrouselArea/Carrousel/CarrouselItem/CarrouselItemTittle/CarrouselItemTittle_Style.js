const sm = {
  container: " h-2/5 w-full ",
  tittle: " text-5xl ",
  collection: " text-xl ",
}
const md = {
  container: " md:w-5/6 ",
  tittle: "  ",
  collection: "",
}
const lg = {
  container: "",
  tittle: "  ",
  collection: "",
}




function CarrouselItemTittle_Style() {
  return {
    container:  
      " bg-p-white flex justify-around flex-col " +
        sm.container +
        md.container +
        lg.container ,


    tittle: 
      " bg-p-white font-bold " +
        sm.tittle + 
        md.tittle + 
        lg.tittle ,

    collection: 
      " bg-p-white font-semibold text-p-dgrey " +
        sm.collection + 
        md.collection + 
        lg.collection ,
  }
}

export default CarrouselItemTittle_Style;