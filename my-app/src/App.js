import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'


function NewPost() {
  return (
    <section className="col-3">
    <button type="button" className="btn btn-primary float-right">New Post</button>
  </section>
  );
}

class Sort extends Component {
  render() {
    return (
      <div className="row my-4">
        <section className="col-9 d-flex align-items-center">

          <form className="">
            <div className="form-group m-0 d-flex align-items-center">
              <input type="text" className="form-control form-control-sm" id="filter" name="filter" aria-describedby="filter-content" placeholder="Filter"/>
            </div>
          </form>




            <div className="dropdown show d-flex align-items-center ml-4">
              <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Sort By Title</a>
                <a className="dropdown-item" href="#">Sort By Votes</a>
                <a className="dropdown-item" href="#">Sort By Date</a>
              </div>
            </div>
        </section>
          <NewPost />
      </div>
    );
  }
  }

class App extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light border-bottom" style={{backgroundColor: '#f7f7f7'}}>
          <a className="navbar-brand d-flex align-items-center navBarTitle" href="./">Reddit Clone</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            </ul>
          </div>
        </nav>

        <section className="container-fliud">
          <div className="row d-flex justify-content-center">
            <div className="col-11">
              <Sort />
            </div>
          </div>
        </section>
      </div>
    );
   
  }
  }
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
   
export default App;
