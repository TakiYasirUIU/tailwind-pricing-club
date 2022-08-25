import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <h1 className='text-6xl'>Welcome to my pricing club</h1>
    </div>
  );
}

export default App;
