import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import FontAwesome from 'react-fontawesome';





class Sidebar extends Component {


  constructor(props){
	super(props);
	this.eventCloseSidebar = this.eventCloseSidebar.bind(this)
  }

  eventCloseSidebar (e) {
  	this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

  <div className="sidebar">

		  <div className="sidebar-top">
		    <div className="sidebarImg"></div>
				<p>C  A  D</p>
		  </div>

		  <nav className="sidebar-nav">
		    <Link to="/hem" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Hem</Link>
		    <Link to="/portfolio" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Portfolio</Link>
		    <Link to="/services" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Services</Link>
		    <Link to="/om-mig" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Om mig</Link>
				<Link to="/utbildning" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Utbildning</Link>

		  </nav>

		  <div className="sidebar-bottom">
				<p>
					<FontAwesome name="facebook" size="1x"/>
					<a href="https://facebook/carlosdemirovic"></a><br/>
					<FontAwesome name="linkedin" size="1x"/>
					<a href="https://se.linkedin.com/in/carlos-abel-demirovic-96835149"> </a><br/>
					<FontAwesome name="envelope" size="1x"/>
					<a href="mailto:demirovic84@gmail.com?Subject=Hej Carlos" target="_top"></a><br/>
				</p>
		  </div>

		</div>
    );
  }
}

export default Sidebar;