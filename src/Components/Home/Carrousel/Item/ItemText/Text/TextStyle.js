const sm = {
  section: " h-2/5 w-full ",
  description: " text-lg ",
  randomText: " text-lg ",
}
const md = {
  section: " md:w-5/6 ",
  description: "",
  randomText: "",
}
const lg = {
  section: "",
  description: "",
  randomText: "",
}




function TextStyle() {
  return {
    section: 
      " bg-p-white flex justify-center flex-col " +
        sm.section + 
        md.section + 
        lg.section ,

    description: 
      " bg-p-white " +
        sm.description + 
        md.description + 
        lg.description ,
    randomText: 
      " bg-p-white pt-4 " + 
        sm.randomText + 
        md.randomText + 
        lg.randomText ,
  }
}

export default TextStyle;