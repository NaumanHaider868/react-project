import React, { Component } from 'react'

export default class AboutCustomerChoose extends Component {
  constructor(){
    super();
    this.state={
      customer: 'FORM OUR CUSTOMERS',
      customerPara: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus dolor nostrum impedit molestiae libero adipisci rem! Repellat velit molestias, vero, veritatis quasi maxime aliquid in! Dolore architecto molestias ratione, labore autem perferendis porro, vitae facilis velit consectetur quam voluptas nisi illo officiis distinctio beatae mollitia! ',
      save: 'Subscribe now and save',
      para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eveniet quis eaque soluta, placeat doloribus.'
    }
  }
  render() {
    return (
      <div>
          <div style={{background: '#2f2d2d', width: '100%', height: '300px'}}>
                <div className="container text-center">
                    <div className="col-md-3">
                        
                    </div>
                    <div className="col-md-6" style={{marginTop: '50px'}}>

                    <b className="text-white" style={{fontSize: '24px', fontFamily: 'sans-serif'}}>{this.state.customer}</b>

                    <p className="text-white text-center" style={{marginTop: '30px'}}><i className="fas fa-quote-left"></i>
                        {this.state.customerPara}
                    <i class="fas fa-quote-right"></i></p>

                    </div>

                    <div className="col-md-3"></div>
                </div>
            </div>
            <div style={{width: '100%', height: '100px', marginTop: '30px'}}>
				<div className="container text-center">

					<div className="col-md-4"></div>

					<div className="col-md-4" style={{position: 'absolute', height: '200px', marginTop: '-80px', marginLeft: '350px', marginBottom: '100px', backgroundColor: '#fff'}}>

						<b style={{fontSize: '23px', marginTop: '50px', display: 'inline-block'}}>{this.state.save}</b>

						<p style={{marginTop: '10px'}}></p>{this.state.para}<br/>

						<form>
							<input type="" placeholder="Your email address" style={{border: 'none', background: '#ccc', width: '220px', height: '30px', borderRadius: '10px 0px 0px 12px',  }}/>
						<div className="button"><a href="#"><i className="fas fa-paper-plane fa-lg"></i></a></div>
						</form>

					</div>


					<div className="col-md-4"></div>
				</div>

		    </div>
      </div>
    )
  }
}
