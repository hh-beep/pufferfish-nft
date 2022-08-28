import TittleStyle from "./TittleStyle";



const Tittle = ({  tittle, collection  }) => {
  
  const style = TittleStyle();
  
  
  return (
    <section className={  style.container  }>
      <h1 className={  style.tittle  }>{  tittle  }</h1>
      <p className={  style.collection  }>Pufferfish {  collection  } collection</p>
    </section>
  )
} 

export default Tittle; 