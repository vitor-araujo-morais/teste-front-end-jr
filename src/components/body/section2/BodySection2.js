import style from './BodySection2.module.css'

function App (){
    return (<div className={style.select_all_section}>

    <div className={style.content}>
        <div className={style.main_title}>Venha conhecer nossas <br></br>promoções</div>
        <div className={style.caption}>50%  off</div>
        <button className={style.product_views}>Ver produto</button>
    </div>

    </div>)
}

export default App