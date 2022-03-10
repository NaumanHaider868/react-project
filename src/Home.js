import React, { Component } from 'react'
import HomeContent from './CompoetFiles/HomeContent'
import MyHeader from './CompoetFiles/MyHeader'
import MyNavbar from './CompoetFiles/MyNavbar'
import MyFooter from './CompoetFiles/MyFooter'


export default class Home extends Component {
  render() {
    return (
      <div>
          <MyHeader/>
          <MyNavbar/>
          <HomeContent/>
          <MyFooter/>
      </div>
    )
  }
}
