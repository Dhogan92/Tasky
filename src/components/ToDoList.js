import React, { Component } from 'react';

class ToDoList extends Component {

    componentDidUpdate(){
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div>
                  <form onSubmit={this.props.addItem}>
                    <input  
                    value={this.props.currentItem.text} 
                    ref={this.props.inputElement}
                    onChange={this.props.handleChange}
                    type="text" 
                    placeholder="Add A To-Do" 
                    className="toDoInpt"
                    />
                    <button type="submit" className="toDoBtn">+ Add Task</button>
                </form>
            </div>
        );
    }
}

export default ToDoList;
