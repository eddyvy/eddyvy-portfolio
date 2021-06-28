import React, { useContext, useState } from 'react'

import { LangContext } from '../PortfolioApp'
import { palette } from '../data/palette'


export const MyDetails = ({ setToggleDetails }) => {

    const lang = useContext(LangContext)

    const [active, setActive] = useState('objectives')

    const detailsStyle = {
        backgroundColor: palette.color2
    }

    const buttonStyle = {
        color: palette.color5
    }

    const buttonStyleSelected = {
        color: palette.color1
    }

    const bodyStyle = {
        backgroundColor: palette.color5,
        color: palette.color1
    }

    const handleClick = (e) => {
        setActive(e.target.id)
    }

    const closeDetails = () => {
        setToggleDetails(false)
    }

    if ( lang === 'english' ) {
        return (
            <div className="card" style={ detailsStyle }>
                <div className="card-header d-flex justify-content-center">
                    <ul className="nav nav-tabs card-header-tabs" >
                        <li className="nav-item">
                            <button
                                id="story"
                                className={ (active === 'story') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'story') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Story
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                id="objectives"
                                className={ (active === 'objectives') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'objectives') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Objectives
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                id="skills"
                                className={ (active === 'skills') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'skills') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Skills
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                id="hobbies"
                                className={ (active === 'hobbies') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'hobbies') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Hobbies
                            </button>
                        </li>
                    </ul>
                </div>
                {
                    ( active === 'story' )
                    && (
                        <div className="card-body p-3" style={ bodyStyle }>
                            <h5>My Story</h5>
                            <p className="card-text">
                            I am an Aerospace Engineer and a Pilot. Now I am currently studying a Computer Science Degree.
                            I born the 7th July of 1993 in Palma de Mallorca, Spain, where I live nowadays.
                            </p>
                            <h6>How did I arrive here?</h6>
                            <p>
                            After High School I was accepted in the Polytechnic University of Madrid (UPM) for studying what I had chosen, Aerospace engineering.
                            During last year of the Degree I started to work into a little airline company called Privilege Style as engineer in Mallorca.
                            After 2 years working there I leave when accepted to join a Pilot Cadet Program of Iberia, the program was done in Flight Training Europe in Jerez, Spain.
                            Once I finished the Pilot studies I decided to roll up in an Online Computer Science Degree in the International Valencia University.
                            </p>
                            <h6>Why Computer Science?</h6>
                            <p>
                            Because what I most love about engineering is programming.
                            I discovered it during my studies but aviation took me to a lot of different places since I decided to take the step.
                            If I love technologies and I can be hours in front of a computer programming... why not?
                            I started studying by myself thanks to online courses at Platzi and Udemy and then joinning the career.
                            </p>
                            <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                        </div>
                    )
                }
                {
                    ( active === 'objectives' )
                    && (
                        <div className="card-body" style={ bodyStyle }>
                            <h5>My Objectives</h5>
                            <p className="card-text">
                                Become a professional programmer<br/>
                                Get experience in Tech World<br/>
                                Learn to be part of a Team<br/>
                                Master any of the Technologies I know<br/>
                                Discover new technologies to learn<br/>
                                Meet new people who learn from
                            </p>
                            <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                        </div>
                    )
                }
                {
                    ( active === 'skills' )
                    && (
                    <div className="card-body" style={ bodyStyle }>
                        <h5>My Skills</h5>
                        <p className="card-text">
                            Willing to learn<br/>
                            Motivation<br/>
                            Creativity<br/>
                            Team Working<br/>
                            Comunication Skills
                        </p>
                        <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                    </div>
                    )
                }
                {
                    ( active === 'hobbies' )
                    && (
                        <div className="card-body" style={ bodyStyle }>
                            <h5>My Hobbies</h5>
                            <p className="card-text">
                                VideoGames<br/>
                                Nature<br/>
                                Animals<br/>
                                Canoe<br/>
                                Cinema / TV<br/>
                                Friends
                            </p>
                            <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                        </div>
                    )
                }
            </div>
        )
    } else if ( lang === 'spanish' ) {
        return (
            <div className="card" style={ detailsStyle }>
                <div className="card-header d-flex justify-content-center">
                    <ul className="nav nav-tabs card-header-tabs" >
                        <li className="nav-item">
                            <button
                                id="story"
                                className={ (active === 'story') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'story') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Historia
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                id="objectives"
                                className={ (active === 'objectives') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'objectives') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Objetivos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                id="skills"
                                className={ (active === 'skills') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'skills') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Habilidades
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                id="hobbies"
                                className={ (active === 'hobbies') ? 'nav-link active' : 'nav-link' }
                                style={ (active === 'hobbies') ? buttonStyleSelected : buttonStyle }
                                onClick={ handleClick }
                            >
                                Hobbies
                            </button>
                        </li>
                    </ul>
                </div>
                {
                    ( active === 'story' )
                    && (
                        <div className="card-body p-3" style={ bodyStyle }>
                            <h5>Mi Historia</h5>
                            <p className="card-text">
                            Soy Ingeniero Aeroespacial y Piloto. Actualmente estudio Ingeniería Informática.
                            Nací el 7 de Julio de 1993 en Palma de Mallorca, España, donde vivo actualmente.
                            </p>
                            <h6>¿Cómo he llegado hasta aquí?</h6>
                            <p>
                            Despúes del Bachillerato fui aceptado en la Universidad Politécnica de Madrid (UPM) para estudiar lo que escogí, Ingeniería Aeroespacial.
                            Durante el último año del Grado empecé a trabajar en una pequeña compañía aérea llamada Privilege Styel como ingeniero aeronáutico, en Mallorca.
                            Después de 2 años trabajando allí, dejé el trabajo cuando fui aceptado en el programa de cadetes de Iberia, para conventirme en piloto.
                            Este programa lo realicé y finalicé con éxito en la escuela FTE en Jerez, España.
                            Despúes de ello ingresé en el Grado de Ingeniería Informática en la Universidad Internacional de Valencia (VIU) de manera online.
                            </p>
                            <h6>¿Por qué ingeniería informática?</h6>
                            <p>
                            Porque lo que más me gustaba de la ingeniería era programar.
                            Lo descubrí durante mis estudios en Madrid a pesar de que la aviación me llevó por muchos otros caminos.
                            Y si me encanta la tecnología y puedo estar horas enfrente del ordenador programando... ¿Por qué no intentarlo?
                            Empecé a estudiar de manera autodidacta cursos online en Platzi y Udemy para luego ingresar en la carrera.
                            </p>
                            <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                        </div>
                    )
                }
                {
                    ( active === 'objectives' )
                    && (
                        <div className="card-body" style={ bodyStyle }>
                            <h5>Mis Objetivos</h5>
                            <p className="card-text">
                                Conventirme en programador profesional<br/>
                                Conseguir experiencia en el mundo tecnológico<br/>
                                Aprender a ser parte de un equipo<br/>
                                Masterizar cualquier tecnologío que conozca<br/>
                                Descubrir nuevas tecnologías que aprender<br/>
                                Reunirme con nuevas personas de las que aprender
                            </p>
                            <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                        </div>
                    )
                }
                {
                    ( active === 'skills' )
                    && (
                    <div className="card-body" style={ bodyStyle }>
                        <h5>Mis Habilidades</h5>
                        <p className="card-text">
                            Capacidad para aprender y estudiar<br/>
                            Motivación<br/>
                            Creatividad<br/>
                            Trabajo en Equipo<br/>
                            Habilidades Comunicativas
                        </p>
                        <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                    </div>
                    )
                }
                {
                    ( active === 'hobbies' )
                    && (
                        <div className="card-body" style={ bodyStyle }>
                            <h5>Mis Hobbies</h5>
                            <p className="card-text">
                                VideoJuegos<br/>
                                Naturaleza<br/>
                                Animales<br/>
                                Canoa<br/>
                                Cine / TV<br/>
                                Amigos
                            </p>
                            <button type="button" className="btn-close" aria-label="Close" onClick={ closeDetails }></button>
                        </div>
                    )
                }
            </div>
        )
    }
}


