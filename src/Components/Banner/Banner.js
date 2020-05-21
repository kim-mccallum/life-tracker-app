import React, { Component } from "react";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNav from "../../Components/SideNav/SideNav";
import logo from "../../images/nature.svg";
import "./Banner.css";

export default class Banner extends Component {
  state = {
    sideNavVisible: false,
  };

  sideNavHandler = (e) => {
    // toggle the sideNavState
    console.log(this.state.sideNavVisible);
    this.setState({ sideNavVisible: !this.state.sideNavVisible });
  };

  render() {
    return (
      <>
        <div className="banner">
          <figure className="logo-container">
            <img className="logo" src={logo} alt="trees logo" />
          </figure>
          <h1 className="app-name">Big picture life tracker</h1>
          <FontAwesomeIcon
            className="menu-icon"
            icon={faAlignLeft}
            onClick={this.sideNavHandler}
          />
        </div>
        <SideNav toggleMenu={this.state.sideNavVisible} />
      </>
    );
  }
}
