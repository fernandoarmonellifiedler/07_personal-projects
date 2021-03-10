import React, { useState, useEffect } from 'react';
// lists
import { categoriasData } from './data/categoriasData';
import { librosData } from './data/librosData';
import { personasData } from './data/personasData';
// components
import Categorias from './components/Categorias';
import Libros from './components/Libros';
import Personas from './components/Personas';
import Loading from './components/Loading';

function App() {
  const [categorias, setCategorias] = useState(categoriasData);
  const [libros, setLibros] = useState(librosData);
  const [personas, setPersonas] = useState(personasData);

  return (
    <>
      <div className='app'>
        <div className='app-title'>
          <h1>My Books</h1>
          <div className='underline'></div>
        </div>
        <div className='container'>
          <Categorias categorias={categorias} setCategorias={setCategorias} libros={libros} />
          <Libros libros={libros} setLibros={setLibros} categorias={categorias} personas={personas} />
          {/* <Personas /> */}
        </div>
      </div>
    </>
  );
}

export default App;
