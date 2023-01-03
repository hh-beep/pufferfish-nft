const sm = " justify-around flex-col ";
const md = " md:justify-between md:flex-row ";





function Notion_Style() {
  return {
    Box: 
      " w-screen h-screen flex justify-around items-center ",


      
    BoxContainer: 
      " w-11/12 h-4/5 flex items-center " +
        sm +
        md ,
  }
}

export default Notion_Style;