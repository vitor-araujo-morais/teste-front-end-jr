import style from './FooterSection2.module.css'
import EconverseLogo from './images/EconverseLogo.png'
import StoreLogo from './images/StoreLogo.png'

function App(){
    return(
    <div className={style.select_all_section}>

    <div className={style.copyright_text}>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br></br>
        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</div>  

    <div className={style.copyright_images}>
        <img src={EconverseLogo}></img>
        <img src={StoreLogo}></img>
    </div>      
    </div>
    )
}

export default App