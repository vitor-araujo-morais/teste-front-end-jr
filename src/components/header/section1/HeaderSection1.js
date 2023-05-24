import style from './HeaderSection1.module.css'
import ShieldCheck from '../section1/images/ShieldCheck.png'
import Truck from '../section1/images/Truck.png'
import CreditCard from '../section1/images/CreditCard.png'


function App(){
    return (
        <div className={style.select_all_section}>

            <div className={style.column_header}>
                <img className={style.icons} src={ShieldCheck}></img>  
                <div className={style.text_column2}>Compra</div>
                <div className={style.text_column1}>100% seguro</div>
            </div>

            <div className={style.column_header}>
                <img className={style.icons} src={Truck}></img>  
                <div className={style.text_column1}>Frete grátis</div>
                <div className={style.text_column2}>acima de R$ 200</div>
            </div>
      
            <div className={style.column_header}>
                <img className={style.icons} src={CreditCard}></img>
                <div className={style.text_column2}>parcele</div>
                <div className={style.text_column1}>suas compras</div>
            </div>

        </div>
    )
}

export default App