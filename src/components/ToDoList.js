import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    console.log(props)

    return(
        <div className="ToDo-container">

            <ul className="ToDo-List">
                {props.todos.map((todo, index) => (
                    
                <ToDo
                toDoRemoveHandler={props.toDoRemoveHandler}
            key={index}
            index={index}
            text={todo.text}/>
            
            
                ))}


            </ul>
        </div>
    );

};

export default ToDoList;