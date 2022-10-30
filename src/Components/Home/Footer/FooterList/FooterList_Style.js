const sm = " h-5/6 w-11/12 "
const md = " md:w-5/6 md:h-3/5 "





function FooterList_Style() {
  return {
    Container: 
      " flex justify-between flex-col " +
        sm + 
        md ,

    ContainerSection: 
      " h-full md:h-4/5 flex justify-between flex-col md:flex-row items-center flex-wrap ",
  }
}

export default FooterList_Style;