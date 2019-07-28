import React, { Component } from 'react'
import './style.scss'

class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          意见反馈
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          联系我们
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          关于我们
        </a>
        <br/>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          安卓端
        </a>
        <em className="footer__seperator">|</em>
        <a className='footer__link' href="https://m.dianping.com/nmy/myinfo">
          IOS端
        </a>
        <br/>
        <p className="footer__copyright">copyright ©2019 yuegomall.com</p>
      </footer>
    )
  }
}

export default Footer