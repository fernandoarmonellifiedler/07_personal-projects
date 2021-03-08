import React, { useState, useEffect } from 'react';

import Persona from './components/Persona';
import Categoria from './components/Categoria';
import Libro from './components/Libro';

function App() {
  const [categoria, setCategoria] = useState([]);
  const [libro, setLibro] = useState([]);
  const [persona, setPersona] = useState([]);

  const fetchLists = async () => {
    try {
      const response = await fetch(categoria);
      const categorias = await response.json();
      setCategoria(categorias);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await fetch(libro);
      const libros = await response.json();
      setCategoria(libros);
    } catch (error) {
      console.log(error);
    }
    try {
      const response = await fetch(persona);
      const personas = await response.json();
      setCategoria(personas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLists();
  },[])

  return (
    <>
      <div className='container'>
        <h1 className='app-title'>My Books</h1>
        <div className='app'>
          <Categoria
            categoria={categoria}
            setCategoria={setCategoria}
            fetchLists={fetchLists}
            // libroState={libroState}
            // setLibroState={setLibroState}
            // personaState={personaState}
            // setPersonaState={setPersonaState}
          />
          {/* <Libro
            categoriaState={categoriaState}
            libroState={libroState}
            personaState={personaState}
          />
          <Persona
            categoriaState={categoriaState}
            libroState={libroState}
            personaState={personaState}
          /> */}
        </div>
      </div>
    </>
  );
}

export default App;
