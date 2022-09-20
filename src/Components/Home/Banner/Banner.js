/*  Components  */
import BannerTittle from "./BannerTittle/BannerTittle";
import BannerLogo from "./BannerLogo/BannerLogo";

/*  Style  */
import Banner_Style from "./Banner_Style";





const style = Banner_Style(); 





const Banner = () => {
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