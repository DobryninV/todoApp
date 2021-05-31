import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import { Component } from 'react';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

  maxId = 100;

  state ={
    todoData: [
      this.createItem('Drink coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Find Middle Job Offer')
    ],
    filter: '',
    searchText: ''
  }

  createItem(text) {
    return {
      label: text,
      important: false,
      id: this.maxId++,
      done: false
    }
  }

  addItem = (text) => {
    this.setState(({ todoData })=>{
      let newItem = this.createItem(text);

      const newArray = [
        ...todoData,
        newItem
      ];

      return { 
        todoData: newArray 
      };
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData })=>{
      const idx = todoData.findIndex((el)=> el.id === id);

      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx+1)
      ]

      return {
        todoData: newArray
      }
    })
  }

  onDoneFilter = () => {
    console.log('done')
    this.setState({filter: 'done'});
  }

  onTodoFilter = () => {
    console.log('todo')
    this.setState({filter: 'todo'});
  }

  onAllFilter = () => {
    this.setState({filter: ''});
  }

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);

    const editItem = {...arr[idx], [propName]: !arr[idx].[propName]};
    return [
      ...arr.slice(0, idx),
      editItem,
      ...arr.slice(idx+1)
    ];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData })=>{
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      }
    })
  }

  search = (text) => {
    this.setState({
      searchText: text
    })
  }

  render() {
    const { todoData, filter, searchText } = this.state
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div>
        <AppHeader 
          toDo={todoCount}
          done={doneCount}
        />
        <SearchPanel 
          onSearchInput={this.search}
        />
        <ItemStatusFilter 
          onAllFilter={this.onAllFilter}
          onDoneFilter={this.onDoneFilter}
          onImportantFilter={this.onTodoFilter}
        />
        <TodoList 
          todos={ todoData }
          onFilter={ filter }
          search={ searchText }
          onDeleted={ this.deleteItem }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant }
        />
        <ItemAddForm 
          onAddItem={this.addItem}
        />
      </div>
    );
  }
};