import React from 'react'


//usar props
const SocialButtons = (dataIconos) => {
    return (
        <div className="Iconos">
            <div className="footer-icon">
                <a><i className={dataIconos.redsocial1}></i></a>
                <a><i className={dataIconos.redsocial2}></i></a>
                <a><i className={dataIconos.redsocial3}></i></a>
            </div>
        </div>
    )
}
export default SocialButtons;
