
import TodoListItem from '../todo-list-item'

import './todo-list.css';

const TodoList = ({todos, onFilter, search, onDeleted, onToggleDone, onToggleImportant}) => {

  let elements = todos;

  if (onFilter === 'done') {
    elements = todos.filter((el) => el.done)
  }
  if (onFilter === 'todo') {
    elements = todos.filter((el) => !el.done)
  }
  if (search.length !== 0) {
    console.log(search.split(''))
    elements = elements.filter((el) => el.label.split('').includes(...search.split('')) )
  }

  const domElements = elements.map(
    ({id, ...itemProps})=>{
      return (
        <li key={id} className="list-group-item">
          <TodoListItem 
            {...itemProps}
            onDeleted={()=>{onDeleted(id)}}
            onToggleDone={()=>onToggleDone(id)}
            onToggleImportant={()=>onToggleImportant(id)}
          />
        </li>
      )
    })

  return (
    <ul className="list-group todo-list">
      {domElements}
    </ul>
  );
}; 

export default TodoList;