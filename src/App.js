import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Book from './Book';
import Nav from './Nav';
import Slot from './Slot';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
    <Routes>
        <Route path="/" element={<Book/>}/>
        <Route path="/slot" element={<Slot/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
