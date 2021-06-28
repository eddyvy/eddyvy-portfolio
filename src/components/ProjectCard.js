import React, { useContext, useRef, useState } from 'react'

import { LangContext } from '../PortfolioApp'
import { palette } from '../data/palette'
import { GithubLink } from './GithubLink'


export const ProjectCard = ({ project }) => {

    const lang = useContext(LangContext)

    const { src, alt, title, body, technologies, link, githubLink } = project

    const [showPopUp, setShowPopUp] = useState(false)
    const buttonRef = useRef(null)

    const cardStyle = {
        backgroundColor: palette.color5,
        color: palette.color1,
        width: '18rem'
    }

    const techStyle = {
        textAlign: 'center',
        margin: '5px',
        width: '25px'
    }

    const buttonStyle = {
        backgroundColor: palette.color2,
        borderColor: palette.color2
    }

    const popUpStyle = {
        backgroundColor: palette.color5,
        width: '100%'
    }

    const handleShowPopUp = () => {
        setShowPopUp(true)
        buttonRef.current.classList.add('disabled')
    }

    const handleHidePopUp = () => {
        setShowPopUp(false)
        buttonRef.current.classList.remove('disabled')
    }

    return (
        <div className="card m-4" style={ cardStyle }>
            <img src={ src } className="card-img-top" alt={ alt } />
            <div className="card-body position-relative pb-4">
                <h5 className="card-title">{ title }</h5>
                <div className="container mt-3 mb-3 d-flex flex-wrap justify-content-center align-items-center pb-3">
                    {
                        technologies.map( tech => (
                            <span className="m-2" key={ tech.name }>
                                <img src={ tech.src } alt={ tech.name } style={ techStyle } />
                                { tech.name }
                            </span>
                        ) )
                    }
                </div>
                <button
                    className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3"
                    ref={ buttonRef }
                    style={ buttonStyle }
                    onClick={ handleShowPopUp }
                >
                    {
                        (lang === 'english')
                        && ( 'More Details' )
                    }
                    {
                        (lang === 'spanish')
                        && ( 'Más Detalles' )
                    }
                </button>
                {
                    ( showPopUp )
                    && (
                        <div className="card position-absolute bottom-50 start-50 translate-middle-x p-3 animate__animated animate__zoomIn animate__faster" style={ popUpStyle }>
                            <button onClick={ handleHidePopUp } type="button" className="btn-close" aria-label="Close"></button>
                            <div className="card-text mt-2">
                                <p>{ body }</p>
                                <a className="m-2" href={ link } target="_blank" rel="noreferrer">Link</a>
                                <GithubLink githubLink={ githubLink } />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
