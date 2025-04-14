import React from 'react'
import './HomeScreen.css'
import SessionForm from '../../SessionForm/SessionForm'

const HomeScreen = () => {
  return (
    <div className='caja_paginas texto_izquierda'>
      <div className='caja_home'>
        <h1 className='titulo_logo texto_centro'><span className='titulo_logo_solo_am'>am</span>-Mármol</h1>
        <br />
        <p className='texto_home'>
            En nuestro sitio encontrarás el catálogo completo de <b>am-Mármol</b>.
        </p>
        <br />
        <h3>¡Iniciá sesión y aprovechá todas nuestras ofertas!</h3>
        <SessionForm/>
      </div>

    </div>
  )
}

export default HomeScreen