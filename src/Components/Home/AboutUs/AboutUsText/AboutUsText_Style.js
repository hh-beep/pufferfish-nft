const sm = {
  Container: "  w-full h-full items-center ",
  ContainerTittle: " text-center text-4xl ",
  ContainerText: " text-center tracking-normal text-xl ",
}
const md = {
  Container: " md:w-2/5 md:items-start ",
  ContainerTittle: " md:text-start md:text-5xl ",
  ContainerText: " md:text-start md:text-2xl ",
}





function AboutUsText_Style() {
	return {

	Container: 
    " flex justify-around flex-col " + 
      sm.Container +
      md.Container ,



  ContainerTittle: 
    " font-bold text-white " +
      sm.ContainerTittle +
      md.ContainerTittle ,



  ContainerText: 
    " text-mgrey my-12 " +
      sm.ContainerText +
      md.ContainerText ,
	}
}

export default AboutUsText_Style;