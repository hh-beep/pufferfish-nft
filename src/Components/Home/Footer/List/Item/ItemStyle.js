const md = " md:w-2/5 lg:w-1/6 md:h-2/6 "
const sm = " w-5/6 h-1/6 "

function ItemStyle() {
  return {

    Container: 
      " flex justify-around bg-p-white rounded-md "
        +sm + md,

    ContainerImage: 
      " bg-p-white p-4 ",

  }
}

export default ItemStyle;