import React from 'react';
import './MyConcerns.css';
import buildingImg from '../../assets/building.png';
import businessImg from '../../assets/business.png';

class MyConcerns extends React.Component {
  state = {
    menuList: [
      { id: 'obj_1', index: '01', title: '我的应用', active: true },
      { id: 'obj_2', index: '02', title: '我的待办', active: false },
    ],
    current: 'obj_1'
  }

  onMouseEnter(id) {
    const { menuList } = this.state;
    menuList.forEach(ele => ele.active = false);
    menuList.find(ele => ele.id === id).active = true;
    this.setState({
      menuList,
      current: id
    })
  }

  render() {
    const { menuList, current } = this.state;
    return (
      <div className="my_concerns_container">
        <div className="my_concerns_title">
          <h1>我的关注</h1>
          <p>CONCERNS</p>
        </div>
        <div className="my_concerns_menu">
          <ul>
            {menuList.map(item => (
              <li key={item.id} className={`clearfix ${item.active ? 'cur' : ''}`} onMouseEnter={this.onMouseEnter.bind(this, item.id)}>
                <i>{item.index}</i>
                <span>{item.title}</span>
                <b></b>
              </li>
            ))}
          </ul>
        </div>
        <ul className="my_concerns_content">
          <li className={current === 'obj_1' ? 'cur' : ''}>
            <div className="info">
              <img width="350" height="400" src={buildingImg} alt="图片" />
              <div>
                <h1 className="align-center color-white">我的应用</h1>
                <p className="color-white">服务描述型简短文案最多两行最多两行最多两行最多两行</p>
                <div className="btn_container">
                  <div>
                    <button className="btn-primary">创业就业</button>
                  </div>
                  <div>
                    <button className="btn-primary">跨城办公</button>
                  </div>
                  <div>
                    <button className="btn-primary">横琴管家</button>
                  </div>
                  <div>
                    <button className="btn-primary">社会保障</button>
                  </div>
                </div>
              </div>
            </div>
            <ul className="content_grid clearfix">
              <li className="clearfix fl">
                <i className="jycy fl"></i>
                <div className="fl">
                  <h4>就业创业</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
              <li className="clearfix fl">
                <i className="wzcx fl"></i>
                <div className="fl">
                  <h4>违章查询</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
              <li className="clearfix fl">
                <i className="zfbz fl"></i>
                <div className="fl">
                  <h4>住房保障</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
              <li className="clearfix fl">
                <i className="shbz fl"></i>
                <div className="fl">
                  <h4>社会保障</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
            </ul>
          </li>
          
          <li className={current === 'obj_2' ? 'cur' : ''}>
            <div className="info">
              <img width="350" height="400" src={businessImg} alt="图片" />
              <div>
                <h1 className="align-center color-white">我的待办</h1>
                <p className="color-white">服务描述型简短文案最多两行最多两行最多两行最多两行</p>
                <div className="btn_container" style={{justifyContent: 'center'}}>
                  <div>
                    <button className="btn-primary big">立即进入</button>
                  </div>
                </div>
              </div>
            </div>
            <ul className="content_grid clearfix">
              <li className="clearfix fl">
                <i className="zfbz fl"></i>
                <div className="fl">
                  <h4>住房保障</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
              <li className="clearfix fl">
                <i className="shbz fl"></i>
                <div className="fl">
                  <h4>社会保障</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
              <li className="clearfix fl">
                <i className="jycy fl"></i>
                <div className="fl">
                  <h4>就业创业</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
              <li className="clearfix fl">
                <i className="wzcx fl"></i>
                <div className="fl">
                  <h4>违章查询</h4>
                  <p className="color-grey">应用描述最多三行应用描述最多三行应用描述最多三行应用描述最多三行</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyConcerns;
