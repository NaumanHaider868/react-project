import React, { Component } from 'react'

export default class MyFooter extends Component {
    constructor(){
        super();
        this.state={
            footerColumn1:{
                row1: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
                row2: 'Lorem ipsum dolor sit amet, consectetur.',
                row3: 'Lorem ipsum dolor sit amet.'
            },
            footerColumn2:{
                heading: 'CUSTOMER SERVICE',
                row1: 'TheProviders',
                row2: 'SourceFile',
                row3: 'BootStrap 5'
            },
            footerColumn3:{
                row1: 'Ypar Account',
                row2: 'Become an Affiliation',
                row3: 'Shipping Rates'
            },
            footerColumn4:{
                heading: 'CONTACT',
                row1: ' Faisalabad, People,s colony # 2, Pakistan',
                row2: ' naumanhaider868@gmail.com',
                row3: ' +92 3087140347'
            },
            copyRight:{
                part1: 'CopyRight @ 2021 All right reserved by:',
                part2: 'The Providers',
            }
        }
    }
  render() {
    return (
      <div>
            <footer className="bg-drak text-white pt-5 pb-4">
                <div className="container text-md-left">
                    <div className="row text-md-left">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto-3">
                            <a className="text-uppercase mb-4 font-weight-bold text-warning"><img src="img/2.png"/></a>
                            <p style={{color: '#fff'}}>{this.state.footerColumn1.row1}</p>
                            <p style={{color: '#fff'}}>{this.state.footerColumn1.row2}</p>
                            <p style={{color: '#fff'}}>{this.state.footerColumn1.row3}</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3" style={{marginTop: '15px'}}>
                            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">{this.state.footerColumn2.heading}</h5>
                            <p>
                                <a href="#" className="text-white" style={{textDecoration: 'none', color: '#fff'}}>{this.state.footerColumn2.row1}</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{textDecoration: 'none', color: '#fff'}}>{this.state.footerColumn2.row2}</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{textDecoration: 'none', color: '#fff'}}>{this.state.footerColumn2.row3}</a>
                            </p>
                        </div>


                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" style={{marginTop: '45px'}}>
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning"></h5>
                        <p>
                                <a href="#" className="text-white" style={{textDecoration: 'none', color: '#fff'}}>{this.state.footerColumn3.row1}</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{textDecoration: 'none', color: '#fff'}}> {this.state.footerColumn3.row2}</a>
                            </p>
                            <p>
                                <a href="#" className="text-white" style={{textDecoration: 'none', color: '#fff'}}>{this.state.footerColumn3.row3}</a>
                            </p>
                            

                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3" style={{marginTop: '15px'}}>
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">{this.state.footerColumn4.heading}</h5>

                        <p>
                                <i className="fas fa-home mr-3"></i>{this.state.footerColumn4.row1}
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3 text-white"></i>{this.state.footerColumn4.row2}
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i>{this.state.footerColumn4.row3}
                            </p>
                    </div>
                    </div>

                    <hr className="mb-4"/>


                    <div className="row align-item-center">
                        <div className="col-md-7 col-lg-8">
                            <p> {this.state.copyRight.part1}
                                <a href="#" style={{textDecoration: 'none'}}><strong className="text-warning"> {this.state.copyRight.part2}</strong></a>
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/ch.nomanhaider.868/" className="btn-floating btn-sm" style={{fontSize: '23px', color: 'white'}}><i class="fab fa-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/naumanhaider868/?hl=en" className="btn-floating btn-sm" style={{fontSize: '23px', color: 'white'}}><i className="fab fa-instagram"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btn-sm" style={{fontSize: '23px', color: 'white'}}><i className="fab fa-google-plus"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btn-sm" style={{fontSize: '23px', color: 'white'}}><i className="fab fa-twitter"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

                
                </div>
            </footer>
      </div>
    )
  }
}
