import React, { useContext, useState } from 'react'

import cvEng from '../assets/CV-EduardValls-may2021-eng.pdf'
import cvSpa from '../assets/CV-EduardValls-may2021-esp.pdf'

import { palette } from '../data/palette'
import { LangContext } from '../PortfolioApp'

import { MyDetails } from './MyDetails'


export const About = () => {

    const lang = useContext(LangContext)

    const [toggleDetails, setToggleDetails] = useState(false)

    const aboutStyle = {
        backgroundColor: palette.color2,
        color: palette.color5,
    }

    const cardStyle = {
        backgroundColor: palette.color2,
        borderColor: palette.color5,
    }

    const buttonStyle = {
        backgroundColor: palette.color5,
        borderColor: palette.color5,
        color: palette.color1
    }

    const detailsStyle = {
        height: '50vh',
        width: '50vw',
        zIndex: 10
    }

    const showDetails = () => {
        setToggleDetails( true )
    }

    return (
        <div id="about" className="d-flex flex-column align-items-center justify-content-start pb-5 pt-3 text-center position-relative" style={ aboutStyle }>
            {
                ( lang === 'english' )
                && ( <h2 className="fw-bolder mt-5 mb-5">About me</h2> )
            }
            {
                ( lang === 'spanish' )
                && ( <h2 className="fw-bolder mt-5 mb-5">Acerca de mi</h2> )
            }
            <div className="d-flex flex-wrap justify-content-center">
                <div className="card pt-4 pb-4 m-4" style={ cardStyle }>

                    {
                        ( lang === 'english' )
                        && (
                            <div className="card-body mt-1 mb-4">
                                <h6 className="card-title m-2">From Palma de Mallorca, Spain</h6>
                                <h6 className="card-title m-2">Self-taught developer</h6>
                                <h6 className="card-title m-2">Passionate of coding</h6>
                                <h6 className="card-title m-2">Started Computer Science Feb 2021</h6>
                                <h6 className="card-title m-2">No working experience as developer</h6>
                            </div>
                        )
                    }
                    {
                        ( lang === 'spanish' )
                        && (
                            <div className="card-body mt-1 mb-4">
                                <h6 className="card-title m-2">De Palma de Mallorca, España</h6>
                                <h6 className="card-title m-2">Desarrollador Autodidacta</h6>
                                <h6 className="card-title m-2">Apasionado del código</h6>
                                <h6 className="card-title m-2">Inicio de Ing. Informática Feb 2021</h6>
                                <h6 className="card-title m-2">Sin experiencia laboral como desarrollador</h6>
                            </div>
                        )
                    }

                    <button
                        className="btn btn-primary ms-5 me-5 fw-bold"
                        style={ buttonStyle }
                        onClick={ showDetails }
                        disabled={ toggleDetails } 
                    >
                        {
                            ( lang === 'english' )
                            && ( 'I want to know more' )
                        }
                        {
                            ( lang === 'spanish' )
                            && ( 'Deseo saber más' )
                        }
                    </button>

                </div>
                {
                    ( toggleDetails )
                    && (
                        <div className="position-absolute top-50 start-50 translate-middle" style={ detailsStyle }>
                            <MyDetails setToggleDetails={ setToggleDetails } />
                        </div>
                    )
                }

                <div className="card pt-4 pb-4 m-4 d-flex flex-column justify-content-between" style={ cardStyle }>
                    {
                        ( lang === 'english' )
                        && (
                            <>
                                <h5 className="p-4">Download my CV as PDF here</h5>
                                <a
                                    className="btn btn-primary ms-5 me-5 fw-bold"
                                    style={ buttonStyle }
                                    href={ cvEng }
                                    download
                                >
                                    CV in English
                                </a>
                            </>
                        )
                    }
                    {
                        ( lang === 'spanish' )
                        && (
                            <>
                                <h5 className="p-4">Descarga mi Currículum en PDF</h5>
                                <a
                                    className="btn btn-primary ms-5 me-5 fw-bold"
                                    style={ buttonStyle }
                                    href={ cvSpa }
                                    download
                                >
                                    CV en Español
                                </a>
                            </>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
