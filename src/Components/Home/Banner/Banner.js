/*  Components  */
import BannerTittle from "./BannerTittle/BannerTittle";
import BannerLogo from "./BannerLogo/BannerLogo";

/*  Style  */
import BannerStyle from "./BannerStyle"



const Banner = () => {

  const style = BannerStyle() 

  return (
    <section className={  style.Banner  }>
      <section className={  style.BannerContainer  }>

        <BannerTittle />

        <BannerLogo />

      </section>
    </section>
  )
}

export default Banner;