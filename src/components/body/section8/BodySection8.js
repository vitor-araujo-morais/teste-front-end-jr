import style from './BodySection8.module.css'

function App(){
    return(
        <div className={style.select_all_section}>

            <div className={style.background_store}>
                <div className={style.title}>Produtos</div>
                <div className={style.caption}>Lorem ipsum dolor <br></br>sit amet, consectetur</div>
                <button>CONFIRA</button>
            </div>

            <div className={style.background_store}>
                <div className={style.title}>Produtos</div>
                <div className={style.caption}>Lorem ipsum dolor <br></br>sit amet, consectetur</div>
                <button>CONFIRA</button>
            </div>
        </div>
    )
}

export default App