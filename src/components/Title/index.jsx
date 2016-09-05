import React, { Component } from 'react';
import { Link } from 'react-router';

require('./style.less')

class Title extends Component {

  render() {
    // Then we go ahead and return some JSX
    return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <Link to="/"> <img alt="Brand" src="https://facebook.github.io/react/img/logo.svg" /> </Link>
                </div>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li> <Link to="/MonthlyTemperatures"> Monthly Temperatures </Link> </li>
                  <li> <Link to="/PhysicalStats"> Physical Stats </Link> </li>
                </ul> 
              </div>
            </div>
          </nav>

          {/* We use cloneElement here so we can auto pass down props */}
          { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
}

export default Title;


