import style from './FooterSection1.module.css'

import FacebookIcon from './images/icons/facebook.png'
import InstagramIcon from './images/icons/instagram.png'
import YoutubeIcon from './images/icons/youtube.png'

import Visa from './images/paymentMethods/visa.png'
import Elo from './images/paymentMethods/elo.png'
import Alelo from './images/paymentMethods/alelo.png'
import Dinners from './images/paymentMethods/dinners.png'
import Ifood from './images/paymentMethods/ifood.png'
import MasterCard from './images/paymentMethods/mastercard.png'
import Pix from './images/paymentMethods/pix.png'
import Amex from './images/paymentMethods/amex.png'
import Ticket from './images/paymentMethods/ticket.png'
import Sodexo from './images/paymentMethods/sodexo.png'

function App(){
    return(
        <div className={style.select_all_section}>

        <div className={style.column1}>
            <div className={style.title}>Sobre nós</div>
            <div className={style.text}>CONHEÇA</div>  
            <div className={style.text}>COMO COMPRAR</div>  
            <div className={style.text}>INDICAÇÃO E DESCONTO</div>   
            <div className={style.icons}>
            <img src={FacebookIcon}></img> 
            <img src={InstagramIcon}></img> 
            <img src={YoutubeIcon}></img>
            </div>
 
        </div> 

        <div className={style.column2}>
            <div className={style.title}>INFORMAÇÕES ÚTEIS</div>
            <div className={style.text}>FALE CONOSCO</div> 
            <div className={style.text}>DÚVIDAS</div> 
            <div className={style.text}>Prazos de Entrega</div> 
            <div className={style.text}>Formas de Pagamento</div> 
            <div className={style.text}>Política de privacidade</div> 
            <div className={style.text}>Trocas e Devoluções</div>    
        </div> 

        <div className={style.column3}>
             
        <div className={style.title}>FORMAS DE PAGAMENTO</div>

            <div className={style.all_forms_of_payment}>
            <img src={Visa}></img>
            <img src={Elo}></img>
            <img src={Alelo}></img>
            <img src={Dinners}></img>
            <img src={Ifood}></img>
            <img src={MasterCard}></img>
            <img src={Pix}></img>
            <img src={Amex}></img>
            <img src={Ticket}></img>
            <img src={Sodexo}></img>
            </div>
         </div>
        <div className={style.column4}>
        <div className={style.registration_card}>

<div className={style.card_caption}>Cadastre-se e Receba nossas <div className={style.card_title}>NOVIDADES E PROMOÇÕES</div> </div>

<div className={style.card_description}>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</div>

<div className={style.form_card}>
    <input placeholder='SEU EMAIL'></input>
    <button>OK</button> 
</div>
    
    </div>
        </div>
         


        </div>
    )
}

export default App