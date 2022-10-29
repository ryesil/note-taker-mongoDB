import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Make from './components/make/Make';
import Navbar from './components/navbar/Navbar';
import Notes from './components/notes/Notes';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
    <Router>
   <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}>
      Home
      </Route>
     <Route path="/notes" element={<Notes/>}>
      Notes
      </Route>
<Route path="/make" element={<Make/>}>
  Take a Note
</Route>
    </Routes>
    </Router>  
    </div>
  );
}

export default App;
