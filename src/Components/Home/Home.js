/* Components */
import Banner from "./Banner/Banner"
import Carrousel from "./Carrousel/Carrousel"
import New from "./New/New"
import Footer from "./Footer/Footer"



const Home = () => {
  return (
    <section className="overflow-x-hidden">    
    
      <Banner />
      <Carrousel />
      <New />
      <Footer />

    </section>
  )
}

export default Home