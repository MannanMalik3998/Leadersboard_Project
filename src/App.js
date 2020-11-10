import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <h1>Leaderboard</h1>
      <Student name="Dummy1" university="DummyUniversity" score={349} />
      <Student name="Dummy2" university="DummyUniversity" score={350} />
      <Student name="Dummy3" university="DummyUniversity" score={349} />
      <Student name="Dummy4" university="DummyUniversity" score={350} />
      <Student name="Dummy5" university="DummyUniversity" score={349} />
      <Student name="Dummy6" university="DummyUniversity" score={350} />
    </div>
  );
}

export default App;
