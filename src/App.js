import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import {todos} from './todos.json';

/*console.log(todos);*/

class App extends Component {
  constructor(){
    super();

    this.state = {
      todos,
      modalVisibility: 'hidden',
      modalDisplay: "none",
      title: 'myTODO'
    };
    /*para que no pierda el scope */
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleAddTodo(todoEl){
    this.setState({
      modalVisibility: "hidden",
      modalDisplay: "none",
      /*se enlaza los datos a los todos del estado*/ 
      todos: [
        ...this.state.todos, 
        todoEl
      ]
    })
  }
    /*console.log(todos);*/


  openModal(){
     this.setState({
       modalVisibility: 'visible',
       modalDisplay: 'block'
     })
  }

  closeModal(){
    this.setState({
      modalVisibility: "hidden",
      modalDisplay: "none"
    })
 }

  removeTodo(index){
    if (window.confirm('Are you sure you want to delete this Task?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  completeTodo(index){
    if (window.confirm('Are you sure you want to mark as completed this Task?')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }
 
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="col-md-4">         
          <div className="card mt-4">
            <div className="card-header">
              <div className="float-left">
                <button type="button" 
                  className="close"
                  onClick={this.completeTodo.bind(this, i)}>
                  <i className="fa fa-check-circle text-secondary"></i>                   
                </button>             
              </div>
              <div className="float-right">
                <button 
                  type="button" 
                  className="close" 
                  onClick={this.removeTodo.bind(this, i)}>
                  <i className="fa fa-times-circle text-muted"></i>                   
                </button>
              </div>
              <h5 className="card-title">{todo.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{todo.description}</p>
            </div>
            <div className="card-footer">
              <p className="card-text">
                <span className="float-left text-secondary">
                  {todo.responsible}
                </span>
                <span className="float-right text-success font-italic">
                  {todo.priority}
                </span>
              </p>
              
            </div>
          </div>
        </div>
      )
    }

    )
    return (
      <div className="App">
        <Navigation modalHandler={this.openModal} title={this.state.title} cont={this.state.todos.length}/>
        
        <div className="container">
          <div className="row mt-4">
            <div className="col md-3" style={{display: this.state.modalDisplay, visibility: this.state.modalVisibility}}>
              
              <TodoForm mmodalHandler={this.closeModal} onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col md-9">
              <div className="row">
                {todos}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
