const sm = " h-2/6 w-10/12  "
const md = " md:w-1/2 "
const lg = " lg:h-1/4 "





function Button_Style() {
  return {
    Button: 
      " flex justify-around items-center border-4 border-dgrey rounded-3xl " + 
        sm +
        md +
        lg ,



    ButtonText: 
      " text-white md:text-2xl text-xl ",
  }
}

export default Button_Style;