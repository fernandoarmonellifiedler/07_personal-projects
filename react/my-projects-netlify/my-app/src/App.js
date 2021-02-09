import React, { useState } from 'react';
import data from './data';
import List from './Project';

function App() {
  const [projects, setprojects] = useState(data);

  return (<main>
    <section className="container">
      <h3>my projects</h3>
      <List projects={projects} />
    </section>
  </main>
  );
}

export default App;