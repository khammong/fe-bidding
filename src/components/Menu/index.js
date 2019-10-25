import React from 'react'
import {Link} from 'react-router-dom'
import {MenuWrapper} from './MenuWrapper'
import logo from '../../images/favicon-32x32.png'
const Menu = () => (
    <MenuWrapper>
        <div className="menu">
            <div className="logo">
                <Link to='/'>
                    <img src={logo} alt='sertis' />
                </Link>
            </div>
            <div className="list">
                <Link to='/'>
                    <img src={logo} alt='sertis' />
                    <h1>Dashboard</h1>
                </Link>
            </div>
            <div className="list">
                <Link to='/buy'>
                    <img src={logo} alt='sertis' />
                    <h1>Buy</h1>
                </Link>
            </div>
            <div className="list">
                <Link to='/sell'>
                    <img src={logo} alt='sertis' />
                    <h1>Sell</h1>
                </Link>
            </div>
            <div className="list">
                <Link to='/auction'>
                    <img src={logo} alt='sertis' />
                    <h1>Auction</h1>
                </Link>
            </div>
            <div className="list">
                <Link to='/auction'>
                    <img src={logo} alt='sertis' />
                    <h1>Tenant & Meter</h1>
                </Link>
            </div>
            <div className="list">
                <Link to='/auction'>
                    <img src={logo} alt='sertis' />
                    <h1>Billing</h1>
                </Link>
            </div>
            <div className="list">
                <Link to='/auction'>
                    <img src={logo} alt='sertis' />
                    <h1>Setting</h1>
                </Link>
            </div>
            <div className="list">
                <Link to='/auction'>
                    <img src={logo} alt='sertis' />
                </Link>
            </div>
            <div className="list">
                <Link to='/auction'>
                    <img src={logo} alt='sertis' />
                </Link>
            </div>
        </div>
    </MenuWrapper>
)

export default Menu