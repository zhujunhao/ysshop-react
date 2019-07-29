import React, { Component } from "react";
import { connect } from "react-redux";
import './style.scss';

class Conceal extends Component {
  render() {
    return (
      <div className="maxDiv">
        <p className="textSty">隐私权政策</p>
        <p className="textSty">【悦达人团队】 （以下简称“我们”）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。</p>
        <p className="textSty">请在使用我们的产品（或服务）前，仔细阅读并了解本《隐私权政策》。</p>           
        <p className="textSty">一、我们如何收集和使用您的个人信息</p>    
        <p className="textSty">个人信息是指以电子方式或其他方式记录的各种信息，可以单独或与其他信息相结合，识别特定自然人或反映特定自然人的活动。</p>     
        <p className="textSty">我们仅会出于本政策所述的以下目的，收集和使用您的个人信息：</p>      
        <p className="textSty">开展内部数据分析和研究，第三方SDK统计服务，改善我们的产品或服务。</p>     
        <p className="textSty">我们收集数据是根据您与我们的互动和您所做出的选择，包括您的隐私设置以及您使用的产品和功能。我们收集的数据可能包括SDK/API/JS代码版本、浏览器、互联网服务提供商、IP地址、平台、时间戳、应用标识符、应用程序版本、应用分发渠道、独立设备标识符、iOS广告标识符（IDFA）、安卓广告主标识符、网卡（MAC）地址、国际移动设备识别码（IMEI）、设备型号、终端制造厂商、终端设备操作系统版本、会话启动/停止时间、语言所在地、时区和网络状态（WiFi等）、硬盘、CPU和电池使用情况等。</p>     
        <p className="textSty">当我们要将信息用于本策略未载明的其它用途时，会事先征求您的同意。</p>        
        <p className="textSty">二、本隐私权政策如何更新</p>       
        <p className="textSty">我们可能适时会对本隐私权政策进行调整或变更，本隐私权政策的任何更新将以标注更新时间的方式公布在我们网站上，除法律法规或监管规定另有强制性规定外，经调整或变更的内容一经通知或公布后的7日后生效。如您在隐私权政策调整或变更后继续使用我们提供的任一服务或访问我们相关网站的，我们相信这代表您已充分阅读、理解并接受修改后的隐私权政策并受其约束。</p>       
        <p className="textSty">悦达人 团队 2019年7月28日</p>     
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {

};

const mapDispatchToProps = (dispatch, props) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conceal);
