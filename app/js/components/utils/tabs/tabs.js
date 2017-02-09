import React, { Component } from "react";
import { TAB_LIST_NAME } from "./components-names.js";
import { getChildPerTypeName } from "./util.js";

export default class Tabs extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentTab: ''
    }
  }

  onClick(tabName, event){
    this.setState({currentTab: tabName});
  }

  render(){
    const tabListWithProps = getChildPerTypeName(
      this.props.children,
      TAB_LIST_NAME,
      {onClick: this.onClick.bind(this)}
    );

    return(
      <div>
        <h1>Tabs!</h1>

        {tabListWithProps}
      </div>
    )
  }
}
