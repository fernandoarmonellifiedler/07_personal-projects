import { useState } from 'react';
import data from './data';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer'

function App() {
  const [projects, setprojects] = useState(data);

  return (
    <>
      <Nav />
      <Main projects={projects} />
      <Footer/>
    </>
  );
}

export default App;
