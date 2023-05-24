import style from './ProductCard.module.css'
import { useState } from "react";
import Modal from "react-modal";
import ProductModal from './ProductModal'
import Motion from 'framer-motion'


Modal.setAppElement("#root");

function App(props) {

    const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

    let percentageValue = (props.data.price / 100) * 6.47
    
    let grossValue = percentageValue + props.data.price

    

  const realFormatted = (value) => {
    const price = parseFloat(value);
    const formattedValue = price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return formattedValue
  }
    
     return (<div className={style.product_card}>
    
    
        <img src={props.data.photo}></img>
        <div className={style.product_name}>{props.data.productName}</div>
        <div className={style.gross_value}>{realFormatted(grossValue)}</div>
        <div className={style.value_with_discount}> {realFormatted(props.data.price)}</div>
        <div className={style.amount_in_installments}>ou 2x de {realFormatted(props.data.price / 2)}</div>
        <div className={style.shipping_text}>Frete grátis</div>
    
        <button onClick={openModal} className={style.buy_button}>COMPRAR</button>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName={style.modal_overlay}
        className={style.modal_content}
      >
        <ProductModal modalComponent={[modalIsOpen, setIsOpen]}  realFormatted={realFormatted} data={props.data}/>
      </Modal>

        </div>)
    }

    export default App