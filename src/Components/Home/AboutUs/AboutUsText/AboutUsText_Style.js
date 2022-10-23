const sm = {
  Container: "  w-full h-full items-center ",
  ContainerTittle: " text-center ",
  ContainerText: " text-center tracking-normal ",
}
const md = {
  Container: " md:w-2/5 md:items-start ",
  ContainerTittle: " md:text-start ",
  ContainerText: " md:text-start ",
}





function AboutUsText_Style() {
	return {

	Container: 
    " flex justify-around flex-col " + 
      sm.Container +
      md.Container ,



  ContainerTittle: 
    " font-bold text-white text-4xl " +
      sm.ContainerTittle +
      md.ContainerTittle ,



  ContainerText: 
    " text-mgrey my-12 text-2xl " +
      sm.ContainerText +
      md.ContainerText ,
	}
}

export default AboutUsText_Style;