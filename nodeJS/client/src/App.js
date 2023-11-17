import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ReactProxy from './components/R110_ApiGetJson';

function App() {
  return (
    <BrowserRouter>
      
        <div className="App">
          {/* <HeaderAdmin /> */}
          <Routes>
            <Route exact path='/reactProxy' element={<ReactProxy />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}
export default App;
