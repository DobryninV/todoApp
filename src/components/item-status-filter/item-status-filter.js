import { Component } from 'react'

export default class ItemStatusFilter extends Component {

  render() {

    const { onAllFilter, onDoneFilter, onImportantFilter } = this.props

    return (
      <div className='btn-group'>
        <button 
          type='button' 
          className='btn btn-info'
          onClick={onAllFilter}
        >All</button>
        <button 
          type='button' 
          className='btn btn-outline-secondary'
          onClick={onImportantFilter}
        >Active</button>
        <button 
          type='button' 
          className='btn btn-outline-secondary'
          onClick={onDoneFilter}
        >Done</button>
      </div>
    );
  }
}