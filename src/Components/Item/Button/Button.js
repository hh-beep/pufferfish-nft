/* Style */
import Button_Style from "./Button_Style";





const style = Button_Style();





const Button = ({  opensea  }) => {
  return (
    <button
      className={  style.Button + " HoverCursor button "  }
      onClick={ () => {
        window.open(opensea, "blank")
      }}
    >



      <p className={  style.ButtonText  }>
        See item on Opensea
      </p>



    </button>
  )
}

export default Button;