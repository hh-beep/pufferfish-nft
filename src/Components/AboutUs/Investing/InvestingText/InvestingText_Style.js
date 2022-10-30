const sm = {
  Container: " w-5/6 ",
  ContainerText: " text-xl text-center ",
}
const md = {
  Container: "  ",
  ContainerText: " md:text-2xl md:text-start ",
}





function InvestingText_Style() {
  return {
    Container: 
      "  " +
        sm.Container +
        md.Container ,



    ContainerText: 
      " text-mgrey " +
        sm.ContainerText +
        md.ContainerText ,
  }
}

export default InvestingText_Style;