const sm = {
  section: "  w-full h-2/3 items-center ",
  sectionText: " text-5xl text-center tracking-normal ",
}
const md = {
  section: " md:h-2/5 md:w-2/5 items-start ",
  sectionText: " md:text-4xl md:text-start ",
}



function SloganText_Style() {
	return {

	section: 
    " flex justify-around flex-col " + 
      sm.section +
      md.section ,


  sectionText: 
    " text-p-white font-bold my-12 " +
      sm.sectionText +
      md.sectionText ,

	}
}

export default SloganText_Style;