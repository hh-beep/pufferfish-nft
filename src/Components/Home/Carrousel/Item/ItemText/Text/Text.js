import TextStyle from "./TextStyle";



const Text = ({  description, randomText  }) => {
  
  const style = TextStyle();
  
  
  return (
    <section className={  style.section  }>
      <p className={  style.description  }>{  description  }</p>
      <p className={  style.randomText  }>" {  randomText  } "</p>
    </section>
  )
}

export default Text;