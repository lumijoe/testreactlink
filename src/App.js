import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';

import Document from './components/Document';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main className="">
          <Link to="/">Home</Link>
          <br />
          <Link to="/document">Document</Link>
          <br />
          <Link to="/form">Form</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/document" element={<Document />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
