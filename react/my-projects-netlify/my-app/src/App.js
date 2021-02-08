import './App.css';
import ItemComponent from './components/ItemComponent';

function App() {
  return (
    <>
      <div className='container'>
        <h1>my projects</h1>
        <ItemComponent name='random title' />
      </div>
    </>
  );
}

export default App;
