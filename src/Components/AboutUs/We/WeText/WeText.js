/* Style */

import WeText_Style from "./WeText_Style";





const style = WeText_Style();





const WeText = () => {
  return (
    <section className={  style.Container  }>
      <p className={  style.ContainerText  }>
      The idea was created and initialized in 2022 for a science project.
      Our main idea was to create and sell utility nft's of 3 types, the Shirts, Mugs and Thermal Bottles.
      We start creating and posting daily content on our social medias to promote our company. 
      </p>
    </section>
  )
}

export default WeText;