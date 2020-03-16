import React from 'react';
import './FlexCard.css';
import { SUMMARY } from './constants';

class FlexCard extends React.Component {
  state = {
    list: [
      { id: 'obj_1', title: '博士后管理', summary: SUMMARY, icon: 'cap', active: true },
      { id: 'obj_2', title: '自动企业管理', summary: SUMMARY, icon: 'house', active: false },
      { id: 'obj_3', title: '科技企业管理', summary: SUMMARY, icon: 'mobile', active: false },
    ]
  }

  onMouseEnter(id) {
    const { list } = this.state;
    list.forEach(item => item.active = false);
    list.find(item => item.id === id).active = true;
    this.setState({
      list
    })
  }

  render() {
    const { list } = this.state;
    return (
      <div className="flex_card_container">
        {list.map(item => (
          <div className={`item ${item.active ? 'active' : ''}`} key={item.id} onMouseEnter={this.onMouseEnter.bind(this, item.id)} style={{backgroundPositionX: item.backgroundPositionX}}>
            <div className={`icon ${item.icon}`}>
              <div></div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FlexCard;
