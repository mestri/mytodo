import React, {Component} from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.default = {
            title: '',
            responsible: '',
            description: '',
            priority: 'Low'
        };
        this.state = this.default;
        this.handleInput = this.handleInput.bind(this);
        /*enlaza el metodo handleInput a los estados, para que no pierda el scope de la app*/
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleInput(e){
        /*console.log(e.target.value, e.target.name);*/
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        /*console.log(this.state);*/
    }
    handleSubmit(e){
        /*el metodo preventDefault evita que se refresque el navegador al presionar el boton del formulario*/
        e.preventDefault();
        console.log(this.state);
        /*recibe los datos del formulario */
        this.props.onAddTodo(this.state);
        this.setState(this.default);
    }
    render(){
        return(
            <div className="card border border-success">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="float-right">
                        <p>
                            <button type="button" className="btn btn-light" onClick={this.props.mmodalHandler}>
                                <i className="fa fa-close"></i>
                            </button>
                        </p>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.title}
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title Task"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.description}
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            value={this.state.responsible}
                            name="responsible"
                            className="form-control"
                            placeholder="Responsible"
                            onChange={this.handleInput}
                        />
                    </div>   
                    <div className="form-group">
                        
                        <select
                            name="priority"
                            value={this.state.priority}
                            className="form-control"
                            onChange={this.handleInput}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button className="btn btn-secondary" type="submit">
                        Add Task
                    </button>
                </form>

            </div>
        )
    }
}

export default TodoForm;