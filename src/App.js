import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import './App.scss';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        
      </Routes>
     
    </Router>
  );
}

export default App;
