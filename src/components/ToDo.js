import React from 'react';

const ToDo = ( props ) => {
    console.log(props)

    



    return(

        <div className="todo">
            <li className="ToDo-item">{props.text}</li>
            
            <button onClick={() => props.toDoRemoveHandler(props.index)} className = "trash-btn">
                <i className="fas fa-trash"></i>
            </button>

        </div>
    );
};

export default ToDo;