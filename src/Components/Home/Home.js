/* Components */
import Banner from "./Banner/Banner"
import CarrouselArea from "./CarrouselArea/CarrouselArea"
import Slogan from "./Slogan/Slogan"
import Footer from "./Footer/Footer"



const Home = ({  CarrouselInfos  }) => {
  return (
    <section className="overflow-x-hidden">    
    
      <Banner />
      <CarrouselArea 
        infos={  CarrouselInfos !== undefined ? Object.values(  CarrouselInfos  ) : []  }
      />
      <Slogan />
      <Footer />

    </section>
  )
}

export default Home