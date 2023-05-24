import style from "./BodySection7.module.css"

function App (){ 

    return(
        <div className={style.select_all_section}>

      <div className={style.background_apple}> 
        <div className={style.title}>Parceiros</div>
        <div className={style.caption}>Lorem ipsum dolor sit<br></br> amet, consectetur</div>
        <button>CONFIRA</button>
    </div>

      <div className={style.background_apple}> 
        <div className={style.title}>Parceiros</div>
        <div className={style.caption}>Lorem ipsum dolor sit<br></br> amet, consectetur</div>
        <button >CONFIRA</button>
    </div>

        </div>
    )
}

export default App