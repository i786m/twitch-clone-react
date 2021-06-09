import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='app__body'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
