import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <header classNameName="App-header">
          <img src={logo} classNameName="App-logo" alt="logo" />
          <h1 classNameName="App-title">Welcome to React</h1>
        </header>
        <p classNameName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// class Body extends React.Component {
//   render() { 
//     return ( 
//       <section>
//       <form>
//         <div class="form-group">
//           <label for="exampleInputEmail1">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//         </div>
//       </form>
//     </section>

//      );

//   }

// }
class Body extends React.Component {
  render() {
    return (
      <section>
      <form>
        <div class="form-group">
          <label for="filter">Email address</label>
          <input type="text" className="form-control" id="filter" name="filter" aria-describedby="filter-content" placeholder="Filter"/>
        </div>
      </form>
    </section>
     
    );
  }
  }

 


class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light navBar greenText navBarBorder" style={{backgroundColor: '#f7f7f7'}}>
        <a className="navbar-brand d-flex align-items-center navBarTitle" href="./">Reddit Clone</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          </ul>
        </div>
      </nav>
    );
    <Body />
  }
  }
  ReactDOM.render(
    <Navbar />,
    document.getElementById('root')
  );
   
export default Navbar;
