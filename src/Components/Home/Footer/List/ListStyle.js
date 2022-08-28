const sm = " h-4/5 w-11/12 "
const md = " md:w-5/6 md:h-3/5 "



function ListStyle() {
  return {
    Container: 
      " flex justify-between flex-col " +
        sm + md,


    ContainerPrincipal: 
      " flex justify-around items-center h-1/6 ",
    ContainerPrincipalImage: 
      " border-p-white border-2 rounded-md py-12 px-16 ",


    ContainerSecondary: 
      " h-4/6  flex justify-around flex-col md:flex-row items-center flex-wrap ",
  }
}

export default ListStyle;