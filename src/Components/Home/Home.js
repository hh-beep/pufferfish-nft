/* React */
import { useEffect } from "react";

/* Components */
import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";
import CarrouselArea from "./CarrouselArea/CarrouselArea";
import Slogan from "./Slogan/Slogan";
import Footer from "./Footer/Footer";



const Home = ({  CarrouselInfos  }) => {
  
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  
  return (
    <section className="overflow-x-hidden">    
    
      <Banner />
      <AboutUs />
      <CarrouselArea 
        infos={  CarrouselInfos !== undefined ? Object.values(  CarrouselInfos  ) : []  }
      />
      <Slogan />
      <Footer />

    </section>
  )
}

export default Home