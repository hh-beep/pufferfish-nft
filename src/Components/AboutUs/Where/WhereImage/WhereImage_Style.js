const sm = {
  Container: " hidden ",
  ContainerImage: "",
}
const md = {
  Container: " md:flex md:w-2/5 md:h-full",
  ContainerImage: " md:w-5/6 lg:w-full ",
}





function WhereImage_Style() {
  return {
    Container: 
      " justify-around items-center " +
        sm.Container +
        md.Container ,



    ContainerImage: 
      "  " +
        sm.ContainerImage +
        md.ContainerImage ,
  }
}

export default WhereImage_Style;