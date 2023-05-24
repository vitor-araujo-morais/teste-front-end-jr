import style from "./BodySection4.module.css"

function App(){
    return (
        <div className={style.select_all_section}>
            <div className={style.line}></div>
            <div className={style.product_text}> Produtos Relacionados </div>
            <div className={style.line}></div>
        </div>
    )
}

export default App