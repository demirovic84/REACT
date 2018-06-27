import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
    <div className="masthead">
			<div className="container">
			  <h3 className="masthead-title">
				<h3>My portfolio built with React & Redux</h3>
			    {/* <a href="/" title="Home">My portfolio built with React & Redux</a> */}
			  </h3>
			</div>
		</div>
    );
  }
}

export default Header;