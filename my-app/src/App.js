import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import postData from './postData';



class NewPostForm extends Component {
constructor(props) {
  super(props);
  this.state={
    id: this.props.currentId,
    title: '',
    description: '',
    author: '',
    imgURL: '',
    comments: []
  };
}

submitPost(e) {
  this.props.handleSubmit(e, this.state);

  this.setState({
    id: this.props.currentId,
    comments: this.state.comments
  });
  e.target.reset();
}

handleChange(event) {
  event.preventDefault();
  this.setState({[event.target.name]: event.target.value})
}

render() { 
  return (
        <form className="col-12 px-0 mt-3" onSubmit={(e)=>this.submitPost(e)}>
        
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="titleLabel" name="title" aria-describedby="title" placeholder="Enter Title" value={this.state.title} onChange={event=>this.handleChange(event)} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Body</label>
            <textarea type="text" className="form-control" id="bodyLabel" name="description" placeholder="Body" rows="2" value={this.state.description} onChange={event=>this.handleChange(event)}/>
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" className="form-control" id="authorLabel" name="author" placeholder="Author" value={this.state.author} onChange={event=>this.handleChange(event)}/>
          </div>

          <div className="form-group">
            <label htmlFor="imgURL">Image URL</label>
            <input type="text" className="form-control" id="imgURL" name="imgURL" placeholder="Author" value={this.state.imgURL} onChange={event=>this.handleChange(event)}/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  );
}
}


class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="row my-4 mx-0">
        <section className="col-9 d-flex align-items-center px-0">

          <form className="">
            <div className="form-group m-0 d-flex align-items-center">
              <input type="text" className="form-control form-control-sm" id="filter" name="filter" aria-describedby="filter-content" placeholder="Filter"/>
            </div>
          </form>

            <div className="dropdown show d-flex align-items-center ml-4">
              <a className="dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sort
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="/">Sort By Title</a>
                <a className="dropdown-item" href="/">Sort By Votes</a>
                <a className="dropdown-item" href="/">Sort By Date</a>
              </div>

            </div>
        </section>

        <section className="col-3 px-0">
          <button type="button" className="btn btn-primary float-right" onClick={()=>this.props.handleNewPostClick()}>New Post</button>
        </section>
          {this.props.newPostClick && <NewPostForm currentId={this.props.currentId} data={this.props.data} handleSubmit={this.props.handleSubmit}/>}
      </div>
    );
  }
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentButton: false,
      comments: this.props.data.comments,
      arrowCount: 0
    }
    this.handleUpArrow = this.handleUpArrow.bind(this);
    this.handleDownArrow = this.handleDownArrow.bind(this);
  }

  handleUpArrow() {
    this.setState({
      arrowCount: this.state.arrowCount + 1,
    });
  }

  handleDownArrow() {
    if(this.state.arrowCount!==0){
      this.setState({
        arrowCount: this.state.arrowCount - 1,
      });
    }
  }

  handleCommentButton() {
    this.setState({
      commentButton: !this.state.commentButton
    });
  }

  comments(comments) { 
    return ( 
        <ul className="marginFirstComment">
          { 
            comments.map((comment, index)=>{
              return <li key={index}>{comment}</li>
            })
          } 
        </ul>
     );
  }

  addComment(e) {
    let newComment=[e.target.querySelector('input').value];

    e.preventDefault();
    this.setState({
      comments: this.state.comments.concat(newComment)
    });
  }

  commentsForm() {
    return(
      <form onSubmit={(e)=>this.addComment(e)}>
        <div className="form-row align-items-center pt-3">
          <div className="col-6">
              <input type="text" className="form-control" id="commentSubmission" name="comments" placeholder=""/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }

  render() { 
    return ( 
      <section className="row my-2 mx-0 rounded bg-light border">

        <div className="col-md-2 col-sm-12">
          <img src={this.props.img} className="img img-fluid"/>
        </div>

        <div className="col-md-8 col-sm-12">

          <div className="mb-2 d-flex">
            <p className="font-weight-bold">{this.props.title} |</p> 
            <div className="text-right d-md-none">{this.props.author}</div>
            <i id="upArrow" className="fas fa-arrow-up mx-1 arrowGreen handCurser" onClick={this.handleUpArrow}></i>
            <i id="downArrow" className="fas fa-arrow-down mx-1 arrowRed handCurser" onClick={this.handleDownArrow}></i>
            <div>{this.state.arrowCount}</div>
          </div>

          <div>{this.props.description}</div>
          <div className="d-flex mt-3">a few seconds ago | 
            <i className="fas fa-comment-alt mx-1"></i> {this.state.comments.length}  <span className="ml-1 handCurser" onClick={()=>this.handleCommentButton()}>comments </span>
          </div>
          <div>
            {this.state.commentButton && this.comments(this.state.comments)}
            {this.state.commentButton && this.commentsForm()}


          </div>
        </div>

        <div className="col-2 d-none d-md-block">
          <div className="text-right">{this.props.author}</div>
        </div>
  
      </section>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: postData,
      newPostClick: false,
      comments: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNewPostClick = this.handleNewPostClick.bind(this);
  }

  handleNewPostClick () {
    this.setState({
      newPostClick: !this.state.newPostClick
    });
  }

  handleSubmit(e, obj) {
    e.preventDefault();
    obj.id=this.state.data.length+1;
    this.setState({
      data: this.state.data.concat([obj]),
    });
  }

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
        <hahaha></hahaha>
        <section className="container-fliud">
          <div className="row d-flex justify-content-center">
            <div className="col-11">
              <Sort currentId={this.state.data.length} data={this.state.data} handleSubmit={this.handleSubmit} handleNewPostClick={this.handleNewPostClick} newPostClick={this.state.newPostClick} />
              {this.state.data.map(post => 
              <Post data={post} key={post.id} img={post.imgURL} title={post.title} author={post.author} description={post.description} comments={post.comments} handleCommentSubmit={this.handleCommentSubmit}/>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
    
  export default App;