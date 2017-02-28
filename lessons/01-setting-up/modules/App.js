import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';
import Home from './Home';
import { IndexLink } from 'react-router';

// export default React.createClass({
//   render() {
//     return <div>Hello World</div>
//   }
// })

class App extends React.Component{
  render() {
    return(
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/repos" activeStyle={{ color: 'red' }}>Repos</NavLink></li>
        </ul>
        {this.props.children}
        {this.props.children || <Home />}
      </div>
    );
  }
}

export default App;
