import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ESTADOS_DISPONIBLES = {
    NO_COMPRADO: 'no_comprado',
    COMPRADO: 'comprado',
    PROCESANDO: 'procesando'
}

const ProductCard = ({title, color, real_price, discount, img, id}) => {

    const final_price = (real_price / 100) * (100 - discount)
    const [isBought, setIsBought] = useState(ESTADOS_DISPONIBLES.NO_COMPRADO)

    const handleClickBuyButton = () =>{
        setIsBought(ESTADOS_DISPONIBLES.PROCESANDO),
        setTimeout (
            () => {
                setIsBought(ESTADOS_DISPONIBLES.COMPRADO)
                alert("¡Gracias por tu compra!")
            },
            500
        )        
    }

    let boton_comprar

    if(isBought === ESTADOS_DISPONIBLES.COMPRADO){
        boton_comprar = <button className='boton_comprado' disabled>Comprado</button>
    }
    else if(isBought === ESTADOS_DISPONIBLES.PROCESANDO){
        boton_comprar = <button className='boton_procesando' disabled>Procesando...</button>
    }
    else{
        boton_comprar = <button className='boton_comprar' onClick={handleClickBuyButton}>Comprar</button>
    }

    return (
        <div className='card_caja'>
            <div>
                <img src={img} className='img_mesadas' alt={"Mesada " + color} />
            </div>
            <h3 className='titulo'>{color} - {title}</h3>
            <div className='caja_precio_anterior'>
                <span className='precio_real'>${real_price}</span>
                <span>  </span>
                <span className='descuento'>{discount}% OFF</span>
            </div>
            <div className='caja_detalles'>
                <Link to={`/product/${id}`} className='ver_detalles'>Ver detalles</Link>
            </div>
            <div className='precio_final'>
                <span>$ {final_price}</span>
                {boton_comprar}
            </div>
        </div>
    )
}

export default ProductCard
