import style from "./BodySection6.module.css"
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios"
import left from "./images/left.png"
import right from "./images/right.png"
import SendProductInformation from './components/ProductCard.js'
import Modal from "react-modal";
import { MotionValue, motion } from 'framer-motion'

Modal.setAppElement("#root");

function App(){

  const carousel = useRef()
  const [width, setWidth] = useState()

  useEffect( () => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  })

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth 
  }

  
    const [data, setData] = useState([]);
    const url = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

    useEffect(() => {
      axios.get(url)
        .then(response =>{ setData(response.data.products);})
        .catch(error => console.log(error));
    }, []);


    return (
        <div className={style.select_all_section}>

        <img onClick={handleLeftClick} src={left}  className={style.left_arrow}></img>

<motion.div  whileTap={{ cursor: "grabbing"}} className={style.all_cards} ref={carousel}>

<motion.div dragConstraints={{right: 0, left: -width}} drag="x" className={style.inner}>
{data.map( item => (
  <motion.div>
    <SendProductInformation data={item}/>
  </motion.div>
      ))}
</motion.div>

</motion.div>
     

<img onClick={handleRightClick} src={right} className={style.right_arrow}></img>
        </div>
    )
}

export default App