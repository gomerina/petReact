import './style.scss'
import { useEffect, useRef, useState } from 'react'

import Logo from '/svg/logo.svg'
import BasketIcon from '../../UI/basketIcon/BasketIcon'
import Btn from '../../UI/btn/Btn'

export default function Header({ basketCount }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const scrollTop = useRef(0)

    const menuItems = [
        {
            title: 'Home',
            href: '#'
        },
        {
            title: 'Shop',
            href: '#'
        },
        {
            title: 'Features',
            href: '#'
        },
        {
            title: 'Contact',
            href: '#'
        }
    ]

    function toggleMenu() {
        setIsMenuOpen(prev => !prev)
    }

    useEffect(() => {
        if (isMenuOpen) {
            scrollTop.current = window.scrollY
            document.body.classList.add('locked')
        } else {
            document.body.classList.remove('locked')
            window.scrollTo(0, scrollTop.current)
        }
        return () => {
            document.body.classList.remove('locked')
        }
    }, [isMenuOpen])

    return (
        <header className={`header ${isMenuOpen ? 'open-menu' : ''}`}>
            <div className="container">
                <div className="header__inner">

                    <a href="#" className="header__logo">
                        <img src={Logo} alt="" />
                    </a>

                    <div className="header__box">
                        <ul className="header__menu">
                            {menuItems.map(item => (
                                <li
                                    className="header__menu-item"
                                    key={item.title}
                                >
                                    <a
                                        href={item.href}
                                        className="header__menu-link"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="header__controls">
                        <BasketIcon basketCount={basketCount} />

                        <Btn data-modal="login">
                            Login
                        </Btn>

                        <button
                            type="button"
                            className="header__burger"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    )
}
