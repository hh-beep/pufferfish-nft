const sm = " m-8 w-80 h-80 "
const md = " md:mx-6 md:my-12 "
const lg = " lg:w-96 lg:h-96 "





function Item_Style() {
  return {
    Container: 
      " flex justify-around flex-col items-center border-4 border-dgrey rounded-lg " +
        sm +
        md +
        lg ,
  }
}

export default Item_Style;