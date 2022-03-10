import React, { Component } from 'react'
import AboutChosseAndVideo from './CompoetFiles/AboutChosseAndVideo'
import AboutCustomerChoose from './CompoetFiles/AboutCustomerChoose'
import AboutHeaderAndContent from './CompoetFiles/AboutHeaderAndContent'
import MyHeader from './CompoetFiles/MyHeader'
import MyNavbar from './CompoetFiles/MyNavbar'
import MyFooter from './CompoetFiles/MyFooter'

export default class About extends Component {
  render() {
    return (
      <div>
          <MyHeader/>
          <MyNavbar/>
          <AboutHeaderAndContent/>
          <AboutChosseAndVideo/>
          <AboutCustomerChoose/>
          <MyFooter/>
      </div>
    )
  }
}
