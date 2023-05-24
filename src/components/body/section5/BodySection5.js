import style from "./BodySection5.module.css"

function App(){
    return (
        <div className={style.select_all_section}>
            <div className={style.select_product_types}>CELULAR</div>
            <div className={style.select_product_types}>ACESSÓRIOS</div>
            <div className={style.select_product_types}>TABLETS</div>
            <div className={style.select_product_types}>NOTEBOOKS</div>
            <div className={style.select_product_types}>TVS</div>
            <div className={style.select_product_types}>VER TODOS</div>

        </div>
    )
}

export default App