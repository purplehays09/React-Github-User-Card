import React from 'react';
import './App.css';
import Header from './Header'
import Dashboard from './Dashboard'



class App extends React.Component{
  


  render(){
    return(
      <div>
        <Header />

        <Dashboard />
      </div>
    )
  }
}

export default App;
