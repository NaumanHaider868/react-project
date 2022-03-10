import React, { Component } from 'react'

export default class AboutChosseAndVideo extends Component {
	constructor(){
		super();
		this.state={
			choose: 'WHY CHOOSE US',
			eco: 'Eco syster & biodiversity',
			ecoPara: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum reiciendis, sunt nisi in itaque alias assumenda dignissimos tenetur dolores ad, dicta. Ad, vero!',
			certified: 'Certified organic standards',
			certifiedPara: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum reiciendis, sunt nisi in itaque alias assumenda dignissimos tenetur dolores ad, dicta. Ad, vero!',
			fair: 'Fair prices for you',
			fairPara: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum reiciendis, sunt nisi in itaque alias assumenda dignissimos tenetur dolores ad, dicta. Ad, vero!'
		}
	}
  render() {
    return (
      <div>
          <div className="container">
		    	<h4 className="text-center" style={{marginTop: '140px'}}>{this.state.choose}</h4>
		    	
		    	<hr style={{width: '40px', borderTop: '1px solid #a57979',  marginTop: '0px', marginBottom: '0px'}}/>
		    	
		    	<hr style={{width: '40px', borderTop: '1px solid #a57979', marginTop: '8px', marginBottom: '50px'}}/>
		    	
		    	<div className="col-md-4 text-center">
		    		<b>{this.state.eco}</b>
		    		<p>{this.state.ecoPara}</p>
		    	</div>
		    	
		    	<div className="col-md-4 text-center">
		    		<b>{this.state.certified}</b>
		    		<p>{this.state.certifiedPara}</p>
		    	</div>
		    	
		    	<div className="col-md-4 text-center">
		    		<b>{this.state.fair}</b>
		    		<p>{this.state.fairPara}</p>
		    	
		    	</div>
		    </div>



		    <div className="container text-center" style={{marginTop: '50px', marginBottom: '30px'}}>

		    	<iframe width="75%" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

		    </div>
      </div>
    )
  }
}
