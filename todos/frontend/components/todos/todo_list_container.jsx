import React from 'react';
import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { fetchTodos, createTodo, removeTodo} from "../../actions/todo_actions";

const mapStateToProps = (state) => ({
    todos: allTodos(state),
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo)),
    removeTodo: todo => dispatch(removeTodo(todo))
});

export default connect(mapStateToProps,
    mapDispatchToProps
    )(TodoList);