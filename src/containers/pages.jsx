import React from 'react'
import { Header } from '../component/header/header'
import { Footer } from '../component/footer/foor'
import "./pages.css"
export const Pages = ({ children }) => {
    return (
        <>
            <Header />
            <main className="main-container" role="main">
                {children}
            </main>
            <Footer />
        </>
    )
}
