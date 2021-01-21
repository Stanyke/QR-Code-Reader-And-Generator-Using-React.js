import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Generator from "./components/Generator"

function App() {
  return (

    <Router>
      <div className="App">
        <Route path="/" exact component={Generator} />
      </div>
    </Router>
  );
}

export default App;
