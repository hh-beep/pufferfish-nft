const md = {
  Container: " md:w-2/5 md:order-1 ",

  ContainerTittle: " md:text-5xl ",
}
const sm = {
  Container: " w-full order-last ",

  ContainerTittle: " text-6xl ",
}


function BannerTittleStyle() {
  return {
    Container: 
      " flex justify-around items-center " +
        md.Container +
        sm.Container,


    ContainerTittle: 
      " text-p-white font-bold " + 
        md.ContainerTittle +
        sm.ContainerTittle,
  }
}

export default BannerTittleStyle;