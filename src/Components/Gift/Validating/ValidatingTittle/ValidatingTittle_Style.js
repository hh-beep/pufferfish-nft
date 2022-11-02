const sm = {
  Container: " w-5/6 ",
  ContainerTittle: " text-4xl text-center ",
}
const md = {
  Container: "  ",
  ContainerTittle: " md:text-start md:text-5xl md:leading-relaxed ",
}





function ValidatingTittle_Style() {
  return {
    Container: 
      "  " +
        sm.Container ,



    ContainerTittle: 
      " text-white font-bold  " +
        sm.ContainerTittle +
        md.ContainerTittle ,
  }
}

export default ValidatingTittle_Style;