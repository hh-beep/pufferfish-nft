const sm = {
  Container: " w-11/12 order-last ",
  ContainerTittle: " text-5xl ",
}
const md = {
  Container: " md:w-2/5 md:order-1 ",
  ContainerTittle: "",
}





function BannerTittle_Style() {
  return {
    Container: 
      " flex justify-around items-center lg:text-6xl " +
        md.Container +
        sm.Container,


        
    ContainerTittle: 
      " text-p-white font-bold " + 
        md.ContainerTittle +
        sm.ContainerTittle,
  }
}

export default BannerTittle_Style;