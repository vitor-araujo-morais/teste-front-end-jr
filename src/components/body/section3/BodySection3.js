import style from './BodySection3.module.css'
import corrida from './images/corrida.png'
import cuidadosDeSaude from './images/cuidados-de-saude.png'
import ferramentas from './images/ferramentas.png'
import moda from './images/moda.png'
import monitorar_tablet_Smartohone from './images/monitorar-tablet-e-smartohone.png'
import supermercados from './images/supermercados.png'
import whiskey from './images/whiskey.png'

function App(){
    return (
        <div className={style.select_all_section}>

        <div className={style.service_themes}>
            <div className={style.service_card}>
            <img src={monitorar_tablet_Smartohone} className={style.service_images}></img>
        </div>
            <div className={style.tecnologia}>tecnologia</div>
        </div>
           
            <div className={style.service_themes}>
            <div className={style.service_card}>
            <img src={supermercados} className={style.service_images}></img>
        </div>
            Supermercado
        </div>

            <div className={style.service_themes}>
            <div className={style.service_card}>
            <img src={whiskey} className={style.service_images}></img>
        </div>
            Bebidas
        </div>

            <div className={style.service_themes}>
            <div className={style.service_card}>
            <img src={ferramentas} className={style.service_images}></img>
        </div>
            Ferramentas
        </div>

            <div className={style.service_themes}>
            <div className={style.service_card}>
            <img src={cuidadosDeSaude} className={style.service_images}></img>
        </div>
            Saúde
        </div>

            <div className={style.service_themes}>
            <div className={style.service_card}>
            <img src={corrida} className={style.service_images}></img>
        </div>
            Esporte e Fitness
        </div>

            <div className={style.service_themes}>
            <div className={style.service_card}>
            <img src={moda} className={style.service_images}></img>
        </div>
            Moda
        </div>
            
        </div>
    )
}

export default App