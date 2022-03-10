import React, { Component } from 'react'

export default class HomeContent extends Component {
    constructor(){
        super();
        this.state={
            account:'my account',
            active: 'My Account',
            button: 'REGISTER',
            formText: 'Lorem ipsum dolor sit amet.'
        }
    }
  render() {
    return (
        <div>
            <div className="custom_style">
            <h1 className="text">{this.state.account}</h1>
        </div>

        

        <div className="account">
            <p>Home / <a href="#" style={{color: 'black', textDecoration: 'none'}}>{this.state.active}</a></p>
            <hr/>
        </div>




        <form className="form-contant">
            <div className="form-group my-name">
                
            
                <input type="input" className="form-control" id="input" placeholder="User name" style={{background: '#efefef'}}/>
                
            </div>
            <div class="form-group my-email">
                
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" style={{background: '#efefef'}}/>
                
            </div>
            <div className="form-group my-password">
                
                <input type="password" className="form-control" id="password" placeholder="password" style={{background: '#efefef'}}/>
                
            </div>
            <div className="form-group box">
            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/> {this.state.formText}<br/>
            
            <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/> {this.state.formText}
            </div>
            <button class="register text-center">{this.state.button}</button>
        </form>
      </div>
    )
  }
}
