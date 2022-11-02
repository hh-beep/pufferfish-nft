const sm = {
  ContainerSection: " justify-around flex-col w-full ",
  ContainerSectionBox: " h-full w-full justify-around items-center ",
}
const md = {
  ContainerSection: " md:justify-between md:flex-row md:w-11/12 ",
  ContainerSectionBox: " md:w-3/5 md:items-start md:justify-between ",
}
const lg = " lg:w-2/5 "





function Validating_Style() {
  return {
    Container: 
      " h-screen w-screen flex items-center justify-around ",



    ContainerSection: 
      " h-3/5 flex items-center " +
        sm.ContainerSection +
        md.ContainerSection ,


    
    ContainerSectionBox:  
      " flex flex-col " +
        sm.ContainerSectionBox +
        md.ContainerSectionBox +
        lg ,
  }
}

export default Validating_Style;