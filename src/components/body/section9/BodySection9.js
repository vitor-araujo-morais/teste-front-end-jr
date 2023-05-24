import style from "./BodySection9.module.css"
import Logo from "./images/logo.png"
import Arrow from "./images/arrow.png"


function App(){ return( <div className={style.select_all_section}>

        <div className={style.main_title}>Navegue por marcas</div>

        <div className={style.set_of_brands}>
        <div className={style.brand}> <img src={Logo}></img></div>
        <div className={style.brand}> <img src={Logo}></img></div>
        <div className={style.brand}> <img src={Logo}></img></div>
        <div className={style.brand}> <img src={Logo}></img></div>
        <div className={style.brand}> <img src={Logo}></img></div>
    
        </div>

        
    </div>
    )
}

export default App