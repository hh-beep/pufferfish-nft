const sm = "  w-5/6 h-5/6 px-8  "


const md = " md:w-5/12 px-0 "


const lg = " lg:w-5/12 "






function ItemTextstyle() {
  return {
    container: 
      " bg-p-white flex flex-col mx-auto justify-between  " + 
        sm + 
        md + 
        lg ,
  }
}

export default ItemTextstyle;