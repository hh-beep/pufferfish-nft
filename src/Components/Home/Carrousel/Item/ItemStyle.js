const sm = " w-full h-5/6 mx-0 "
const md = " md:w-5/6 md:mx-auto py-8 "
const lg = " lg:w-2/3 "




function ItemStyle() {
  return {
    Item: 
      " flex flex-row justify-between items-center bg-p-white rounded-lg " +
        lg +
        md +
        sm,
  }
}

export default ItemStyle;