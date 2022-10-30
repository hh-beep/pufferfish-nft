const sm = " justify-around flex-col ";
const md = " md:justify-between md:flex-row ";





function Banner_Style() {
  return {
    Banner: 
      " w-screen h-screen flex justify-around items-center ",


      
    BannerContainer: 
      " w-5/6 h-3/5 flex items-center " +
        sm +
        md ,
  }
}

export default Banner_Style;