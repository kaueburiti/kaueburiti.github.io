import React, { Component } from "react";
import { getChildPerTypeName } from "./util.js";

export default class Tabs extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentTab: 'javascript'
    }
  }

  onClick(tabName, event){
    this.setState({currentTab: tabName});
  }

  render(){
    const childrenWithProps = getChildPerTypeName(
      this.props.children,
      {
        onClick: this.onClick.bind(this),
        currentTab: this.state.currentTab
      }
    );

    return(
      <div>
        {childrenWithProps}
      </div>
    )
  }
}
