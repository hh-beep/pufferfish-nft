const sm = {
  Container: " w-11/12 h-auto order-last ",
  ContainerTittle: " text-center text-4xl break-words mx-auto ",
}
const md = {
  Container: " md:w-2/5 md:order-1 ",
  ContainerTittle: " md:text-5xl md:break-normal ",
}





function BannerTittle_Style() {
  return {
    Container: 
      " flex justify-around items-center lg:text-6xl " +
        md.Container +
        sm.Container,


        
    ContainerTittle: 
      " text-white font-bold tracking-wide w-full " + 
        md.ContainerTittle +
        sm.ContainerTittle,
  }
}

export default BannerTittle_Style;