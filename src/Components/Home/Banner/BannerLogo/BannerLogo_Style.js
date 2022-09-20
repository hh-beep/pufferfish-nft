const md = {
  Container: " md:w-2/5 md:order-last ",
  ContainerImage: "",
}
const sm = {
  Container: " w-3/4 order-1 ",
  ContainerImage: "",
}



function BannerLogo_Style() {
  return {
    Container: 
      " flex justify-around items-center " +
        md.Container +
        sm.Container,



    ContainerImage: 
      "" +
        md.ContainerImage +
        sm.ContainerImage,
  }
}

export default BannerLogo_Style;