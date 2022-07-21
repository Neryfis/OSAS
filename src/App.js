
import React from 'react';
import Header from './components/Header';
import ShowRoom from './components/Showroom';
import './App.css'; 

class App extends React.Component {
  render(){
    return(
      <main>
        <Header/>
        <ShowRoom/>
      </main>
    )
  }
}

export default App;
