import React, { Component } from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default class MyNavbar extends Component {
    constructor(){
        super();
        this.state={
            Navbarli1: 'HOME',
            Navbarli2: 'SHOP',
            Navbarli3: 'ABOUT US',
            NavbarNavbarli4: 'PAGES',
            Navbarli5: 'BLOG',
            Navbarli6: 'CONTACT'
        }
    }
  render() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu" style={{backgroundColor: '#d2cfcf'}}>
                            <span className="icon-bar" style={{backgroundColor: '#6f5353'}}></span>
                            <span className="icon-bar" style={{backgroundColor: '#6f5353'}}></span>
                            <span className="icon-bar" style={{backgroundColor: '#6f5353'}}></span>
                        </button>
                    <a href="#"><img src="img/1.png"/></a>
                    </div>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item"><Link to='/'>{this.state.Navbarli1}</Link></li>
        				<li className="nav-item"><a href="#">{this.state.Navbarli2}</a></li>
        				<li className="nav-item"><Link to='/about'>{this.state.Navbarli3}</Link></li>
        				<li className="nav-item"><a href="#">{this.state.Navbarli4}</a></li>
        				<li className="nav-item"><a href="#">{this.state.Navbarli5}</a></li>
        				<li className="nav-item"><a href="#">{this.state.Navbarli1}</a></li>
        				<li><a href="#"><img src="img/3.png" alt=""/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}
