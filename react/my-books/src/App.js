import React, { useEffect, useReducer } from 'react';
import { reducer } from './reducers/appReducer';
import Persona from './components/Persona';
import Categoria from './components/Categoria';
import Libro from './components/Libro';
import { defaultState } from './components/defaultState';
// data lists
// import { categoriaData } from './data/categoriaData';
// import { libroData } from './data/libroData';
// import { personaData } from './data/personaData';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    try {
      const fetchCategorias = defaultState.categorias;
      if (!fetchCategorias || fetchCategorias.length == 0) return;
      dispatch({ type: 'FETCH_CATEGORIA_LIST', payload: fetchCategorias });
      const fetchLibros = defaultState.libros;
      if (!fetchLibros || fetchLibros.length == 0) return;
      dispatch({ type: 'FETCH_BOOK_LIST', payload: fetchLibros });
      const fetchPersonas = defaultState.personas;
      if (!fetchPersonas || fetchPersonas?.length == 0) return;
      dispatch({ type: 'FETCH_PERSONA_LIST', payload: fetchPersonas });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className='container'>
        <h1 className='app-title'>My Books</h1>
        <div className='app'>
          <Categoria
            state={state}
            dispatch={dispatch}
            // categoriaData={categoriaData}
            // libroData={libroData}
            // personaData={personaData}
          />
          <Libro
            state={state}
            dispatch={dispatch}
            // categoriaData={categoriaData}
            // libroData={libroData}
            // personaData={personaData}
          />
          <Persona
            state={state}
            dispatch={dispatch}
            // categoriaData={categoriaData}
            // libroData={libroData}
            // personaData={personaData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
