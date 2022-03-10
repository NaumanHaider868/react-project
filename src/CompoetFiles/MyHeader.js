import React, { Component } from 'react'

export default class MyHeader extends Component {
  constructor(){
    super();
    this.state={
      address: ' 216 Address Name New York city',
      time: ' 7:30 AM - 15:00 PM',
      login: ' Log in / Register | ',
    }
  }
  render() {
    return (
      <div>
            <section className="head">
                <div className="header container">
                    <ul className="nav navbar-nav navbar-left" style={{display: 'flex', marginTop: '10px'}}>
                        <li><span><a href="#" style={{textDecoration: 'none', color: '#fff'}}><i className="fas fa-map-marker-alt"></i>{this.state.address}</a></span></li>
                        <li><span className="shop-time"><i className="fa fa-clock-o" aria-hidden="true"></i> <a href="#" style={{textDecoration: 'none', color: '#fff'}}><i className="far fa-clock"></i>{this.state.time}</a></span></li>

                    </ul>
                    <ul className="navbar-right" style={{marginTop: '10px'}}>
                        <li>	<span className="login"><a href="#" style={{textDecoration: 'none', color: '#fff'}}><i className="far fa-user" style={{color: '#fff'}}></i>{this.state.login}<i className="fas fa-search" style={{color: '#fff'}}></i></a></span></li>
                    </ul>
                </div>
            </section>
      </div>
    )
  }
}
