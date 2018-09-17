import React, {Component} from 'react';

class Navigation extends Component {
    

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="">{this.props.title}</a>
                <button 
                    type="button" 
                    class="btn btn-success"
                    onClick={this.props.modalHandler}>
                    + New 
                </button>
                <span className="badge badge-pill badge-light ml-2">
                    {this.props.cont}
                </span>
            </nav> 
        )
    }
}

export default Navigation;