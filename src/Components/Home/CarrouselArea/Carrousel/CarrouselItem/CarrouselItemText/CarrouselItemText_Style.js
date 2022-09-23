const sm = {
  section: " h-2/5 w-full ",
  description: " text-lg text-center ",
  randomText: " text-lg text-center ",
}
const md = {
  section: " md:w-5/6 ",
  description: " md:text-start ",
  randomText: " md:text-start ",
}
const lg = {
  section: "",
  description: "",
  randomText: "",
}




function CarrouselItemText_Style() {
  return {
    section: 
      " bg-p-white flex justify-center flex-col " +
        sm.section + 
        md.section ,

    description: 
      " bg-p-white " +
        sm.description + 
        md.description , 

    randomText: 
      " bg-p-white pt-4 " + 
        sm.randomText + 
        md.randomText ,
  }
}

export default CarrouselItemText_Style;