import style from './HeaderSection2.module.css'

import Logo from './images/Logo.png'
import MagnifyingGlass from './images/MagnifyingGlass.png'

import Back from './images/Back.png'
import Heart from './images/Heart.png'
import UserCircle from './images/UserCircle.png'
import ShoppingCart from './images/ShoppingCart.png'



function App(){
    return (<div className={style.select_all_section}>

        <img className={style.logo_for_header} src={Logo}></img>

        <input className={style.header_search_bar} placeholder="O que você está buscando?"></input>
        

        <div className={style.service_icons}>
            <img className={style.magnifying_glass} src={MagnifyingGlass}></img>
            <img src={Back}></img>
            <img src={Heart}></img>
            <img src={UserCircle}></img>
            <img src={ShoppingCart}></img>
        </div>
            
      

    </div>)
}

export default App