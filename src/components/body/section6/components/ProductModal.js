import style from './ProductModal.module.css'
import CloseButton from "./images/close.png"

function App(props){

  const [modalIsOpen, setIsOpen] = props.modalComponent

  function closeModal() {
    setIsOpen(false);
  }


    return (<div className={style.select_all_section}>  

    <img src={props.data.photo}></img>

    <div className={style.content}>
    <img className={style.close_modal} src={CloseButton} onClick={closeModal}></img>
      <div className={style.title}>{props.data.productName}</div>
      <div className={style.price}>{props.realFormatted(props.data.price)}</div>
      <div className={style.description}>{props.data.descriptionShort}</div>
      <div className={style.see_details}>Veja mais detalhes do produto &gt;</div>
    </div>
    
    
    </div>)
}

export default App