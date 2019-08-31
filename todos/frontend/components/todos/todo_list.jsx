import React from 'react';
import TodoListItem from './todo_list_item';
import { createTodo , receiveTodo, removeTodo } from '../../actions/todo_actions';
import TodoForm from "./todo_form";

class TodoList extends React.Component  {

    componentDidMount() {
        this.props.fetchTodos();
    }
    
    render () {
        const {todos, errors, createTodo} = this.props;
        const todoListItems = todos.map( 
            todo => <TodoListItem todo={todo} receiveTodo = {receiveTodo} removeTodo={removeTodo} />)
      return (
       <div>
           <ul>
               {todoListItems}
           </ul>
                <TodoForm createTodo={createTodo} errors={errors}/>
       </div>
      )
    }





}

export default TodoList;
