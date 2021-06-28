import React, { useContext } from 'react'

import { LangContext } from '../PortfolioApp'
import { palette } from '../data/palette'


export const Navbar = ({ setLang }) => {

    const lang = useContext(LangContext)

    const navStyle = {
        backgroundColor: palette.color1,
        maxWidth: '100vw'
    }
    const brandStyle = {
        color: palette.color5
    }
    const linkStyle = {
        color: palette.color5
    }
    const lanIconStyle = {
        cursor: 'pointer',
        width: '25px',
    }

    const handleLanguage = (e) => {
        setLang(e.target.id)
    }

    return (
        <nav id="header-nav" className="navbar p-3 fixed-top" style={ navStyle }>
            <div className="nav-item d-flex align-items-center">
                <a className="navbar-brand me-4" href="/#landing" style={ brandStyle }>EddyVY</a>
                {
                    ( lang === 'english' )
                    && (
                        <img
                            src="https://cdn.icon-icons.com/icons2/1531/PNG/512/3253482-flag-spain-icon_106784.png"
                            alt="spanish"
                            id="spanish"
                            className="animate__animated animate__bounceIn animate__faster"
                            style={ lanIconStyle }
                            onClick={ handleLanguage }
                        />
                    )
                }
                {
                    ( lang === 'spanish' )
                    && (
                        <img
                            src="https://image.flaticon.com/icons/png/512/197/197374.png"
                            alt="english"
                            id="english"
                            className="animate__animated animate__bounceIn animate__faster"
                            style={ lanIconStyle }
                            onClick={ handleLanguage }
                        />
                    )
                }
            </div>
            {
                ( lang === 'english' )
                && (
                    <ul className="nav nav-pills animate__animated animate__fadeIn animate__faster">
                        <li className="nav-item">
                            <a className="nav-link" href="/#landing" style={ linkStyle }>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#projects" style={ linkStyle }>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about" style={ linkStyle }>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact" style={ linkStyle }>Contact</a>
                        </li>
                    </ul>
                )
            }
            {
                ( lang === 'spanish' )
                && (
                    <ul className="nav nav-pills animate__animated animate__fadeIn animate__faster">
                        <li className="nav-item">
                            <a className="nav-link" href="/#" style={ linkStyle }>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#projects" style={ linkStyle }>Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#about" style={ linkStyle }>Acerca</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact" style={ linkStyle }>Contacto</a>
                        </li>
                    </ul>
                )
            }
        </nav>
    )

}
