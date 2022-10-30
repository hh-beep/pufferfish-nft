const sm = " w-5/6 h-1/5 "
const md = " md:w-2/5 md:h-1/5 lg:w-1/6 "





function FooterItem_Style() {
  return {
    Container: 
      " flex justify-around rounded-md border-4 rounded-lg border-mgrey " +
        sm +
        md ,



    ContainerImage: 
      " p-4 ",
  }
}

export default FooterItem_Style;