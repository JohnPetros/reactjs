import React from "react";
import Logo from './imgs/logo.jpg'

export default function Header() {
    return (
        <header>
            <img src={Logo} />
            <h1>CFB Cursos</h1>
        </header>
    )
}