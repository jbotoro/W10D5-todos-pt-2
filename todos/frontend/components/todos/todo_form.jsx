import React from 'react';
import uniqueId from '../../util/uniqueId';

class TodoForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            done: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const todo = Object.assign({}, this.state);

        this.props.createTodo( {todo} ).then(
            () => this.setState({title: '', body: ''})
        );
    } 

    update (prop) {
        return e => this.setState({[prop]: e.target.value});
    }



    render () {

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange={this.update("title")}/>
                </label>
                <label>
                    Body:
                    <input type="text" value={this.state.body} onChange={this.update("body")}/>
                </label>
                <input type="submit" value="Add Todo"/>
            </form>
        )
    }






}


export default TodoForm;