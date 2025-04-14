import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../../services/productService'
import './ProductDetailScreen.css'

const ProductDetailScreen = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const {product_id} = useParams()

    const getProductDetail = async () => {
        setLoading(true)
        setTimeout(
            async () => {
                const product_detail_response = await getProductById({product_id})
                if(product_detail_response) {
                    setProduct(product_detail_response)
                }
                else {
                    setError('Error al obtener producto')
                }
                setLoading(false)
            },
            1000
        )
    }

    useEffect(
        () => {
            getProductDetail()
        },
        []
    )

    let content

    if (loading) {
        content = <span>Cargando...</span>
    } else if(!loading && !product) {
        content = <span>Producto no encontrado...</span>
    }
    else {
        const final_price = (product.real_price / 100) * (100 - product.discount)
        content = 
        <div>
            <h3 className='titulo_seccion'>Detalles de mesada</h3>
            <div className='caja_detalles_titulo'>
                <div>
                    <div className='caja_product_detail'>
                        <div>
                            <h5 className='titulo_pd margin_arriba'>Medida</h5><span className='detalles_data'>{product.title}</span>
                        </div>
                        <div>
                            <h5 className='titulo_pd'>Color</h5><span className='detalles_data'>{product.color}</span>
                        </div>
                        <div>
                            <h5 className='titulo_pd'>Precio final</h5><span className='detalles_data sin_bordes padding_abajo'>{final_price}</span>
                        </div>
                    </div>
                    <Link to={'/products'}><button type='button' className='boton_volver'>Volver</button></Link>
                </div>

            </div>
        </div>

    }

    return (
        <div className='caja_paginas'>
            {content}
        </div>
    )
}

export default ProductDetailScreen