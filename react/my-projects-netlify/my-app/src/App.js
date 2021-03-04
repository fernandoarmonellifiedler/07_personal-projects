import React, { useState } from 'react';
import data from './data';
import List from './Project';

function App() {
  const [projects, setprojects] = useState(data);

  return (
    <>
      <nav>
        <ul className='nav-ul'>
          <li>
            <a href='https://www.linkedin.com/in/fernando-armonelli-fiedler-645819162/'>Linkedin</a>
          </li>
          <li>
            <a href='https://github.com/fernandoarmonellifiedler'>Github</a>
          </li>
          <li>
            <a href='https://github.com/fernandoarmonellifiedler/personal-projects'>My projects Repo</a>
          </li>
        </ul>
      </nav>
      <main>
        <section className='container'>
          <h1>Fernando Armonelli Fiedler</h1>
          <h3>my projects</h3>
          <List projects={projects} />
        </section>
      </main>
    </>
  );
}

export default App;
