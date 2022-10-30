/* Style */
import WhereText_Style from "./WhereText_Style";

const style = WhereText_Style();





const WhereText = () => {
  return (
    <section className={  style.Container  }>
      <p className={  style.ContainerText  }>
        _PufferFish_nft was created on Brazil, Paraná.
        Our first event will be on a school project, 05 of November.
        After the event, some videos about it will be posted on twitter and instagram
      </p>
    </section>
  )
}

export default WhereText;