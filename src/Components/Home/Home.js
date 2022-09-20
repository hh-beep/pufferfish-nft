/* Components */
import Banner from "./Banner/Banner"
import CarrouselArea from "./CarrouselArea/CarrouselArea"
import Slogan from "./Slogan/Slogan"
import Footer from "./Footer/Footer"



const Home = () => {
  return (
    <section className="overflow-x-hidden">    
    
      <Banner />
      <CarrouselArea />
      <Slogan />
      <Footer />

    </section>
  )
}

export default Home