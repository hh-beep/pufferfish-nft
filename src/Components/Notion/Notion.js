/* Imports */
import NotionLogo from "./NotionLogo/NotionLogo";

/* Style */
import Notion_Style from "./Notion_Style";





const style = Notion_Style();





const Notion = () => {
  return (
    <section className={  style.Box  }>
      <section className={  style.BoxContainer  }>


        <NotionLogo />


      </section>
    </section>
  )
} 

export default Notion;