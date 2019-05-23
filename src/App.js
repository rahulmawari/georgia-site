import React, { Component } from 'react';
import './App.css';
import './GT.css';
import Header from './components/header';
import About from './components/about';
import ResearchCard from './components/research_card';
import People from './components/people';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <br/>
        <ResearchCard />
        <br/>
        <br/>
        <People />
        <br/>
        <Footer />
      </div>
    );
  }
}

export default App;
