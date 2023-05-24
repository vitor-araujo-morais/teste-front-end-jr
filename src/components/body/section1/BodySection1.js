import style from './BodySection1.module.css'

function App(){
    return(
        <div className={style.select_all_section}>
            <p> TODAS AS CATEGORAIS </p>
            <p> SUPERMERCADO </p>
            <p> LIVROS </p>
            <p> MODA </p>
            <p> LANÇAMENTOS </p>
            <p className={style.offers}> OFERTAS DO DIA </p>
            <p> ASSINATURA </p>
        </div>
    )
}
export default App