const sm = {
  container: " h-2/5 w-full ",
  tittle: " text-5xl text-center ",
  collection: " text-xl text-center ",
}
const md = {
  container: " md:w-5/6 ",
  tittle: " md:text-start ",
  collection: " md:text-start ",
}
const lg = {
  container: "",
  tittle: "  ",
  collection: "",
}




function CarrouselItemName_Style() {
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

export default CarrouselItemName_Style;