import React, { useContext } from 'react'

import { LangContext } from '../PortfolioApp'
import { palette } from '../data/palette'


export const Footer = () => {

    const lang = useContext(LangContext)

    const footerStyle = {
        backgroundColor: palette.color1,
        color: palette.color5,
    }

    return (
        <div className="navbar d-flex justify-content-end p-5" style={ footerStyle } >
            {
                ( lang === 'english')
                && (
                    <div className="d-flex flex-column align-items-end">
                        <span>Created by Eduard Valls</span>
                        <span>June 2021</span>
                    </div>
                )
            }
            {
                ( lang === 'spanish')
                && (
                    <div className="d-flex flex-column align-items-end">
                        <span>Creado por  Eduard Valls</span>
                        <span>Junio 2021</span>
                    </div>
                )
            }
        </div>
    )
}
