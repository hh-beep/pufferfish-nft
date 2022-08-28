/* Icon */
import {  Gift  } from "react-feather"

/* Style */
import ImageStyle from "./ImageStyle.js"




const Image = () => {

  const style = ImageStyle()


  return (
    <figure className={  style.figure  }>
      <Gift color={  '#f2f2f2'  } size={  "100%"  }/>
    </figure>
  )
}

export default Image;