import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: ''})
    }

    onChange = (e) => this.setState({ title: e.target.value });

    render() {

        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text"
                name="title"
                placeholder="Add Todo..." 
                value={this.state.title}
                onChange={this.onChange}
                style={{flex: '10', margin: '10px 0px',padding: '5px', outline: 'none'}} 
                />

                <input type="submit" 
                value="Submit" 
                className="btn"
                style={{flex: '1',  margin: '10px 0px'}} 
                />
            </form>
        )
    }
}

export default AddTodo

