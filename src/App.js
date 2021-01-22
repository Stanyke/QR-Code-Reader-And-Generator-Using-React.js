import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Generator from "./components/Generator"
import Reader from "./components/Reader"

function App() {
  return (

    <Router>
      <div className="App">
        <Route path="/" exact component={Generator} />
        <Route path="/scanner" component={Reader} />
      </div>
    </Router>
  );
}

export default App;
