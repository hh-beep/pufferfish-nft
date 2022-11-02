const sm = " md:justify-between md:flex-row "
const md = " justify-around flex-col "  





function AboutUs_Style() {
  return {
    Container: 
      " w-screen h-screen flex justify-around items-center ",



    ContainerSection: 
      " w-11/12 h-3/5 flex items-center " +
        sm +
        md ,
  }
}

export default AboutUs_Style;