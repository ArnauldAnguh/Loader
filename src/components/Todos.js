import React from 'react';

const Todos = props => {
  if (props.errorMsg !== '') {
    return <div>{props.errorMsg}</div>;
  } else {
    return props.todos.map(todo => {
      return (
        <div key={todo.id} className='ui orange card' style={{ margin: '2em' }}>
          <div className='content'>{todo.title}</div>
        </div>
      );
    });
  }
};
export default Todos;
