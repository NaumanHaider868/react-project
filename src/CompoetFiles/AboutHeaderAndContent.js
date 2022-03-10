import React, { Component } from 'react'

export default class AboutHeaderAndContent extends Component {
	constructor(){
		super();
		this.state={
			headerText: 'about Us',
			active: 'About Us',
			content:{
				para1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nobis libero esse repellat nam? Tempore illo harum sequi et ad ab assumenda accusantium sit rem, fugit, delectus velit ex maiores repellendus quasi vel numquam pariatur! Dolore debitis suscipit accusamus aut, sint tenetur consequuntur, earum architecto.',
				para2:{
					heading: 'OUR VELUES',
					para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, autem explicabo. Veniam ut totam nisi vel quia, similique quisquam ex, est tempora rem. Autem ducimus ipsam deleniti rem.',
				},
				para3:{
					heading: 'ECOFOOD GOALS',
					para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quis assumenda pariatur obcaecati quidem, officia alias quia expedita eligendi quibusdam voluptatem evenietconsectetur molestiae nisi earum dolorem odio, ut tenetur doloremque sint laborum explicabo!',
				}
			}
		}
	}
  render() {
    return (
      <div>
            <div className="custom_style">
				<h1 className="text">{this.state.headerText}</h1>
			</div>
            
            <div className="account">
		    	<p>Home / <a href="#" style={{color: 'black', textDecoration: 'none'}}>{this.state.active}</a></p>
		    	<hr/>
	    	</div>



		    <div class="container" style={{marginTop: '40px'}}>
		    	
		    	<div className="col-md-6">
		    		
		    	</div>
		    	
		    	<div className="col-md-6">
		    		<p>{this.state.content.para1}</p>


		    		<b style={{display: 'inline-block', marginTop: '20px'}}>{this.state.content.para2.heading}</b>
		    		
		    		<p>{this.state.content.para2.para}</p>


		    		<b style={{display: 'inline-block', marginTop: '20px'}}>{this.state.content.para3.heading}</b>
		    		<p>{this.state.content.para3.para}</p>
		    	
		    	</div>
		    </div>
      </div>
    )
  }
}
