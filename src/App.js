import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { SearchBox } from './components/SearchBox';
import { JobList } from './components/JobList';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     <SearchBox />
     <JobList />
     </Router>
    </div>
  );
}

export default App;
