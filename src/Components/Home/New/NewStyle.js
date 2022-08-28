const sm = " md:justify-between md:flex-row "
const md = " justify-around flex-col "



function NewStyle() {
	return {
		
		container: 
      " w-screen h-screen flex justify-around items-center ",


		containerSection: 
      " w-4/5 h-3/5 flex items-center " +
        sm + md,

	}
}

export default NewStyle;