/* Style */
import Image_Style from "./Image_Style";





const style = Image_Style();





const Image = ({  image  }) => {
  return (
    <figure className={  style.Figure  }>
      <img 
				className={  style.FigureImage  }
        src={  image  }
				alt="NFT carrousel"
      />
    </figure>
  )
}

export default Image;
