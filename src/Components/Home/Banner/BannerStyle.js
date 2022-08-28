const md = {
  BannerContainer: "  md:justify-between md:flex-row "
}
const sm = {
  BannerContainer: " justify-around flex-col ",
}




function BannerStyle() {
  return {
    Banner: 
      " w-screen h-screen flex justify-around items-center ",

    BannerContainer: 
      " w-4/5 h-3/5 flex items-center " +
        md.BannerContainer + 
        sm.BannerContainer,
  }
}

export default BannerStyle;