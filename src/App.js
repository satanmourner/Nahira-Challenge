import React from 'react';
import './App.css';
import Article from './components/Article';
import Header from './components/Header';
import Notif from './components/Notif';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="root">
      <Header />
      <Section />
      <Article />
      <Notif />
      <Footer />
    </div>
  );
}

export default App;
