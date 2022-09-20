/* Icon */
import {  Gift  } from "react-feather"

/* Style */
import SloganImageStyle from "./SloganImage_Style"





const style = SloganImageStyle();





const SloganImage = () => {
  return (
    <figure className={  style.figure  }>
      <Gift color={  '#f2f2f2'  } size={  "100%"  }/>
    </figure>
  )
}

export default SloganImage;