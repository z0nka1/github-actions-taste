import React from 'react';
import './Card.css';
import hotBadge from "../../assets/hot.png";
import newBadge from "../../assets/new.png";

class Card extends React.Component {
  state = {
    list: [
      { id: 'obj_1', title: '跨境办公', summary: '服务描述型简短文案最多两行最多两行最多两行', backgroundPositionX: '68px', badge: 'hot' },
      { id: 'obj_2', title: '澳门单牌车', summary: '服务描述型简短文案最多两行最多两行最多两行', backgroundPositionX: '68px', badge: 'new' },
      { id: 'obj_3', title: '横琴管家', summary: '服务描述型简短文案最多两行最多两行最多两行', backgroundPositionX: '68px', badge: '' },
      { id: 'obj_4', title: '博士后服务', summary: '服务描述型简短文案最多两行最多两行最多两行', backgroundPositionX: '68px', badge: '' },
    ]
  }

  onMouseEnter(id) {
    this.setBackgroundPositionX(id, '78px');
  }

  onMouseLeave(id) {
    this.setBackgroundPositionX(id, '68px');
  }

  setBackgroundPositionX(id, x) {
    const { list } = this.state;
    const targetObj = list.find(ele => ele.id === id);
    targetObj.backgroundPositionX = x;
    this.setState({
      list
    })
  }

  render() {
    const { list } = this.state;
    return (
      <div className="card_container">
        {list.map(item => (
          <div key={item.id} onMouseEnter={this.onMouseEnter.bind(this, item.id)} onMouseLeave={this.onMouseLeave.bind(this, item.id)} style={{backgroundPositionX: item.backgroundPositionX}}>
            {item.badge === 'hot' && (
              <img className="badge" alt="label" src={hotBadge} />
            )}
            {item.badge === 'new' && (
              <img className="badge" alt="label" src={newBadge} />
            )}
            <div className="title">{item.title}</div>
            <div className="summary">{item.summary}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
