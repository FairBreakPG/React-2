import React from 'react'
import SocialButton from "./SocialButton"
import Formulario from './Formulario'

export default function Registro() {

    return (

        <div className="container">
            <div className="mb-3 formIngresoDiv">
                <h1 className='titulo' >Crea una Cuenta</h1>
                <div className='Iconos'>
                <SocialButton dataIconos={{ 
                redsocial1: "fa-brands fa-facebook", 
                redsocial2: "fa-brands fa-instagram", 
                redsocial3: "fa-brands fa-linkedin" }} />
                </div>
                <h4 className="mensaje">o usa tu email para registrarte</h4>
                <Formulario />
            </div>
        </div>
    )
}
