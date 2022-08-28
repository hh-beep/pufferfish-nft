const sm = {
  section: "  w-full  ",
  sectionText: " text-5xl text-center ",
}
const md = {
  section: " md:w-2/5 ",
  sectionText: " md:text-4xl md:text-start ",
}



function TextStyle() {
	return {

	section: 
    " flex justify-around items-center " + 
      sm.section +
      md.section ,


  sectionText: 
    " text-p-white font-bold " +
      sm.sectionText +
      md.sectionText ,

	}
}

export default TextStyle;