const sm = " flex-col w-full h-full items-center "
const md = " md:w-11/12 "
const lg = " lg:flex-row lg:h-3/5 lg:items-start "





function Item_Style() {
  return {
    Container: 
      " w-screen h-screen flex justify-around items-center ",



    ContainerSection: 
      " flex justify-between m-auto " + 
        sm +
        md +
        lg ,



    ContainerSectionBox: 
      " lg:h-full lg:items-start lg:w-2/5 h-3/6 w-full flex justify-around items-center flex-col "
  }
}

export default Item_Style;