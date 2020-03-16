import React from 'react';
import './LatestNews.css';
import wallImage from "../../assets/wall.jpg";

class LatestNews extends React.Component {
  state = {
    active: false
  }

  onMouseEnter() {
    this.setActive(true);
  }

  onMouseLeave() {
    this.setActive(false);
  }

  setActive(val) {
    this.setState({
      active: val
    })
  }

  render() {
    const { active } = this.state;

    return (
      <div className="news_container" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <div className="news_front">
          <div className="clearfix">
            <a href="/">
              <div className="fl">
                <i className="kx"></i>
                <span>横琴创新方将于12月6日正式开幕横琴旅游又...</span>
              </div>
              <img className="fl" src={wallImage} width="100" height="66" alt="图片" />
            </a>
          </div>
          <div>
            <a href="/">最新进展！珠机国际一期正...</a>
          </div>
          <div>
            <a href="/">认证合一！公安库人证比对...</a>
          </div>
        </div>

        <div className="news_back">
          <div>
            <i className={active ? 'active' : ''}>
              <span>更多快讯</span>
            </i>
          </div>
        </div>
      </div>
    );
  }
}

export default LatestNews;
