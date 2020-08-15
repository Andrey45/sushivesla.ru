import React, {lazy, Suspense} from "react";
// components
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router'
// svg
import LogoMobile from './assets/logoMobile.svg'
import LogoDesktop from './assets/logoDesktop.svg'
import LogoBasket from './assets/logoBasket.svg'
// style
import './styles.scss'
// lazy
const Info = lazy(() => import('./components/Info'));
const Links = lazy(() => import('./components/Links'));



const mapComponent: StringMapper<JSX.Element> = {
    '/home': <Suspense fallback={<div></div>}>
        <Info/>
    </Suspense>,
    '/cotaloge': <Suspense fallback={<div></div>}>
        <Links/>
    </Suspense>
}

const Header = () => {
    const location = useLocation()
    return (
        <header className="app-header">
            <nav className="app-nav">
                <div className="app-nav__logo">
                    <Link to="/home">
                        <img className="logoDesktop" src={LogoDesktop}/>
                        <img className="logoMobile" src={LogoMobile}/>
                    </Link>
                </div>
                <div className="app-nav__info">
                    <div className="info">
                        <div>
                            Волгоград
                        </div>
                        <div>
                            +8-800-550-30-30
                        </div>
                    </div>
                    <div className="lk">
                        Личный кабинет
                    </div>
                </div>
                <div className="app-nav__children">
                    {
                        mapComponent[location.pathname]
                    }
                    <div className="basket">
                        <img src={LogoBasket}/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header