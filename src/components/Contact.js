import React, { useContext } from 'react'

import { LangContext } from '../PortfolioApp'
import { palette } from '../data/palette'


export const Contact = () => {
    const lang = useContext(LangContext)

    const contactStyle = {
        backgroundColor: palette.color5
    }

    const formStyle = {
        color: palette.color1,
        maxWidth: '600px',
        minWidth: '300px',
        width: '50%'
    }

    const buttonStyle = {
        backgroundColor: palette.color2,
        borderColor: palette.color2
    }

    return (
        <div id="contact" className="d-flex flex-column align-items-center justify-content-start pb-5 pt-5 text-center" style={ contactStyle }>
            {
                ( lang === 'english')
                && (
                    <>
                        <h2 className="mb-5 fw-bold">Contact me !</h2>
                        <h5>On LinkedIn</h5>
                        <a href="www.linkedin.com/in/eduard-valls-yue" target="_blank" rel="noreferrer" className="text-center">
                            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Linkedin" style={{ width: '22px' }} className="m-2" />
                            Eduard Valls
                        </a>
                        <h5 className="mt-4 mb-3">Email me</h5>
                        <form action="https://formsubmit.co/e381b9281bb5d555d413a783caebf6f9" method="POST" target="_blank" className="mb-5" style={ formStyle }>
                            <div className="mb-3">
                                <label className="form-label">Your Email Address</label>
                                <input type="email" name="email" className="form-control text-center" autoComplete="off" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your Name</label>
                                <input type="text" name="name" className="form-control text-center" autoComplete="off" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Your Message</label>
                                <textarea name="body" className="form-control" autoComplete="off" required style={{ height: '200px' }} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" style={ buttonStyle }>Send</button>
                        </form>
                    </>
                )
            }
            {
                ( lang === 'spanish')
                && (
                    <>
                        <h2 className="mb-5 fw-bold">Contáctame !</h2>
                        <h5>A través de LinkedIn</h5>
                        <a href="www.linkedin.com/in/eduard-valls-yue" target="_blank" rel="noreferrer" className="text-center">
                            <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="Linkedin" style={{ width: '22px' }} className="m-2" />
                            Eduard Valls
                        </a>
                        <h5 className="mt-4 mb-3">Envíame un Email</h5>
                        <form action="https://formsubmit.co/e381b9281bb5d555d413a783caebf6f9" method="POST" target="_blank" className="mb-5" style={ formStyle }>
                            <div className="mb-3">
                                <label className="form-label">Tu Dirección de Email</label>
                                <input type="email" name="email" className="form-control text-center" autoComplete="off" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tu Nombre</label>
                                <input type="text" name="name" className="form-control text-center" autoComplete="off" required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Tu Mensaje</label>
                                <textarea name="body" className="form-control" autoComplete="off" required style={{ height: '200px' }} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" style={ buttonStyle }>Enviar</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}
