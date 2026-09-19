import './style.scss'
import Logo from '/svg/logo.svg'
import BasketIcon from '../../UI/basketIcon/BasketIcon'
import Btn from '../../UI/btn/Btn'
export default function Header({ basketCount }) {
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
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <a href="#" className='header__logo'>
                            <img src={Logo} alt="" />
                        </a>
                        <ul className='header__menu'>
                            {menuItems.map((item, index) => (
                                <li className='header__menu-item' key={index}>
                                    <a href={item.href} className='header__menu-link'>{item.title}</a>
                                </li>
                            ))}

                        </ul>
                        <div className="header__controls">
                            <BasketIcon basketCount={basketCount} />
                            <Btn data-modal="login">Login</Btn>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}