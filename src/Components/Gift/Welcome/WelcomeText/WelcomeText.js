/* Style */
import WelcomeText_Style from "./WelcomeText_Style";





const style = WelcomeText_Style();





const WelcomeText = () => {
  return (
    <section className={  style.Container  }>
      <p className={  style.ContainerText  }>
        Welcome to our help page about requesting your gift.
        Here we'll try to explain a little bit more about how to request your gift.
        If you, after read this page, still having trouble to request it, send us a message on our instagram or twitter account.
      </p>
    </section>
  )
}

export default WelcomeText;