import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItems from './components/ToDoItems';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        items: [],
        currentItem: {
          text: '',
          key: '',
        },
    }
    this.inputElement = React.createRef();
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
   
}

handleChange(e){
  const itemText = e.target.value;
  const currentItem = { 
    text: itemText, 
    key: Date.now()
  }
  this.setState({
    currentItem,
  })
}

addItem(e) {
  e.preventDefault()
  const newItem = this.state.currentItem
  if(newItem.text !== ''){
    console.log(newItem)
    const items = [...this.state.items, newItem]
    this.setState({
      items: items,
      currentItem: {
        text: '',
        key: ''
      },
    })
  }
  console.log('hello world')
   
}

deleteItem = key => {
  const filteredItems = this.state.items.filter(item => {
    return item.key !== key
  })
  this.setState({
    items: filteredItems,
  })

}


  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>Tasky ✔︎</h1>
          <ToDoList 
            addItem={this.addItem} 
            inputElement={this.inputElement}
            handleChange={this.handleChange}
            currentItem={this.state.currentItem} />
        </div>
        
        <ToDoItems 
          entries={this.state.items}
          deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
