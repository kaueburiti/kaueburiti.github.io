import React, { Component } from "react";
import { TAB_LIST_NAME, TAB_CONTENT_NAME } from "./components-names.js";
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
    const tabListWithProps = getChildPerTypeName(
      this.props.children,
      TAB_LIST_NAME,
      {
        onClick: this.onClick.bind(this),
        currentTab: this.state.currentTab
      }
    );

    const tabContentWithProps = getChildPerTypeName(
      this.props.children,
      TAB_CONTENT_NAME,
      {currentTab: this.state.currentTab}
    );

    return(
      <div>
        {tabListWithProps}
        {tabContentWithProps}
      </div>
    )
  }
}
