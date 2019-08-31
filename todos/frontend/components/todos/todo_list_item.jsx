import React from 'react';

class TodoListItem  extends React.Component {
    constructor (props) {
        super(props);

        this.removeTodo = this.removeTodo.bind(this)
    }



    removeTodo(e) {
        e.preventDefault();
        const removedTodo = Object.assign({}, this.props.todo)
        this.props.removeTodo(removedTodo)
    }

    render () {
        const todo = this.props.todo.title
        return (
            <li>
                {todo}
            </li>
        )
    }
}


export default TodoListItem;