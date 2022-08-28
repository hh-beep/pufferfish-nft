/* Images */
import Image0 from "../../../Images/Items/shirt_0.png";
import Image1 from "../../../Images/Items/Bottle_0.png";
import Image2 from "../../../Images/Items/Mug_0.png";



function CarrouselItems() {
  return [
    {
      key: 0,
      tittle: "Shirt_0",
      collection: "Shirts",
      description: "Normal Pufferfish Shirt",
      randomText: ":)",
      image: Image0,
    },
    {
      key: 1,
      tittle: "Bottle_0",
      collection: "Thermal Bottles",
      description: "Normal Pufferfish Thermal Bottle",
      randomText: "this guy is gort friend",
      image: Image1,
    },
    {
      key: 2,
      tittle: "Mug_0",
      collection: "Mugs",
      description: "Normal Pufferfish Mug",
      randomText: "someone help, he's melting :(",
      image: Image2,
    },
  ]
}

export default CarrouselItems