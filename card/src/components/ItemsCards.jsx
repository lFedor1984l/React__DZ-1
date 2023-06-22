import React, { Component } from "react";
import Item from "./Item";

export class ItemsCards extends Component {
    render() {
        return (
            <div className="box">
                {this.props.items.map(el => (
                    <Item key = {el.id} items = {el}/>
                ))}
            </div>
        )
    }
}

export default ItemsCards;