import './App.css';
import Project from './components/Project';
import { data } from './components/List';

function App() {
  return (
    <>
      <div className='container'>
        <h1>my projects</h1>
        {data.map((item) => {
          return <Project key={item.id} name={item.name} src={item.img} link={item.link} />;
        })}
      </div>
    </>
  );
}

export default App;