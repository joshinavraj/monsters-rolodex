import React,{Component} from 'react';

import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state={
      monsters :[ ],
      searField:'',
    };
    
  }
  
  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(users=>this.setState({monsters:users}));
  
    
  }
  handleChange=e=>{
    this.setState({searField:e.target.value})
  }
  
  render() {
    const {monsters,searField }=this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searField.toLowerCase()))
    return(
      <div className="App">
         <h1>Monsters Rolodex</h1>      
            <SearchBox
            placeholder='Search monsters'
            handleChange={this.handleChange}
            />  
         <CardList monsters={filteredMonsters}/>
         
      
    </div>
    )
  }
}

export default App;