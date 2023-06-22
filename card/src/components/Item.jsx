import React, { Component } from "react";

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img className="item__like" src={'./img/likesocialheartbuttonoutline_87752.svg'} />
                <img src = {'./img/' + this.props.items.img} />
                <h2>{this.props.items.title}</h2>
                <p>{this.props.items.desc}</p>
                <p className="categor">{this.props.items.category}</p>
                <div className="item__wrapper">
                    <p className="price">{this.props.items.price}</p>
                    <button style = {{backgroundColor:(this.props.items.sale ? 'red' : 'grey')}}>Купить</button>
                </div>
            </div>
        )
    }
}

export default Item;