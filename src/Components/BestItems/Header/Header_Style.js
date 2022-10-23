const sm = {
  Container: " h-56 w-10/12 mx-auto ",
  ContainerTittle: " text-4xl tracking-wide text-center ",
}
const md = {
  Container: " md:h-64 ",
  ContainerTittle: " md:text-5xl ",
}




function Header_Style() {
  return {
    Container: 
      " flex justify-around items-center py-12 " +
        sm.Container +
        md.Container ,



    ContainerTittle: 
      " text-white font-bold  " +
        sm.ContainerTittle +
        md.ContainerTittle,
  }
}

export default Header_Style;