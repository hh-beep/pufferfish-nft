/*  Style */
import BannerTittleStyle from "./BannerTittleStyle";



const BannerTittle = () => {
  
  const style = BannerTittleStyle();
  
  return (
    <section className={  style.Container  }>
      <h1 className={  style.ContainerTittle  }>_PufferFish_</h1>
    </section>
  )
}

export default BannerTittle;