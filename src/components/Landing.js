import React, { useContext } from 'react'

import { LangContext } from '../PortfolioApp'
import { palette } from '../data/palette'
import persoPic from '../assets/eddPic.jpeg'


export const Landing = () => {

    const lang = useContext(LangContext)

    const landingStyle = {
        background: 'linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url("https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: palette.color5,
        fontWeight: 'bold',
        minHeight: '100vh',
        textShadow: `2px 2px ${palette.color1}`
    }

    const imageStyle = {
        border: `solid 5px ${ palette.color1 }`,
        borderRadius: '50%',
        width: '300px'
    }

    const infoStyle = {
        backgroundColor: palette.color1,
        borderRadius: '400px',
        opacity: '0.95',
    }

    return (
        <div id="landing" className="d-flex flex-column align-items-center justify-content-start pb-5 pt-3 text-center" style={ landingStyle } >
            {
                ( lang === 'english' )
                && (
                    <h1 className="fw-bold p-5 mt-5 mb-3 display-1 animate__animated animate__fadeIn animate__faster">Welcome to my Portfolio!</h1>
                )
            }
            {
                ( lang === 'spanish' )
                && (
                    <h1 className="fw-bold p-5 mt-5 mb-3 display-1 animate__animated animate__fadeIn animate__faster">Bienvenido a mi Portafolio!</h1>
                )
            }
            <div className="d-flex justify-content-center flex-wrap">
                <img src={ persoPic } alt="myself" style={ imageStyle } className="m-5"/>
                {
                    ( lang === 'english' )
                    && (
                        <div className="d-flex flex-column align-items-center justify-content-center text-center p-5 m-5" style={ infoStyle }>
                            <h2 className="p-2 animate__animated animate__fadeIn animate__faster">Eduard Valls</h2>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">Front End Developer</span>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">Computer Science Student</span>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">AeroSpace Engineer</span>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">Pilot</span>
                        </div>
                    )
                }
                {
                    ( lang === 'spanish' )
                    && (
                        <div className="d-flex flex-column align-items-center justify-content-center text-center p-5 m-5" style={ infoStyle }>
                            <h2 className="p-2 animate__animated animate__fadeIn animate__faster">Eduard Valls</h2>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">Desarrollador Front End</span>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">Estudiante de Ingeniería Informática</span>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">Ingeniero Aeroespacial</span>
                            <span className="p-2 animate__animated animate__fadeIn animate__faster">Piloto</span>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}
