const sm = " w-80 h-80 "
const md = " md:w-96 md:h-96  "
const lg = " lg:w-[28rem] lg:h-[28rem] shrink-0 "





function Image_Style() {
	return {
		Figure: 
			" lg:h-full lg:w-1/2 h-3/6 flex justify-around items-center shrink-0 ",


		FigureImage: 
			" rounded-lg " +
        sm +
        md +
        lg ,
	}
}

export default Image_Style;
