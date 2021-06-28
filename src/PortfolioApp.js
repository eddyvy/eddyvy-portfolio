import React, { useState } from 'react'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Landing } from './components/Landing'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'


export const LangContext = React.createContext()

export const PortfolioApp = () => {

    const [lang, setLang] = useState('english')

    return (
        <LangContext.Provider value={ lang }>
            <header>
                <Navbar setLang={ setLang } />
            </header>
            <main className="pt-5" data-bs-spy="scroll" data-bs-target="#header-nav" data-bs-offset="0" tabIndex="0">
                <Landing />
                <Projects />
                <About />
                <Contact />
            </main>
            <footer>
                <Footer />
            </footer>
        </LangContext.Provider>
    )
}
