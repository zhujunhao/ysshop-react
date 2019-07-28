import React, { Component } from 'react'
import './style.scss'

class Banner extends Component {
  render () {
    return (
      <header className='banner'>
        <div className='banner__title'>
          <span className='banner__logo'/>
          <span className='banner__text'>买买买，更优惠</span>
          <div className="banner__right">
            <a className='banner__btn banner__btn--bg' href='https://a.app.qq.com/o/simple.jsp?pkgname=com.ydrapp'>下载APP更精彩</a>
          </div>
        </div>
      </header>
    )
  }
}

export default Banner