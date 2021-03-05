import React, { useEffect, useReducer } from 'react';
import { reducer } from './reducers/appReducer';
import { defaultState } from './components/defaultState';
import Persona from './components/Persona';
import Categoria from './components/Categoria';
import Libro from './components/Libro';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  useEffect(() => {
    // console.log('useEffect');
    try {
      dispatch({
        type: 'FETCH_CATEGORIA_LIST',
        payload: defaultState.categorias,
      });
      dispatch({ type: 'FETCH_BOOK_LIST', payload: defaultState.libros });
      dispatch({ type: 'FETCH_PERSONA_LIST', payload: defaultState.personas });
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  // funcion para re-renderizar componentes
  const handleRender = () => {
    // console.log('render');
    try {
      dispatch({
        type: 'FETCH_CATEGORIA_LIST',
        payload: state.categorias,
      });
      dispatch({ type: 'FETCH_BOOK_LIST', payload: state.libros });
      dispatch({ type: 'FETCH_PERSONA_LIST', payload: state.personas });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='container'>
        <h1 className='app-title'>My Books</h1>
        <div className='app'>
          <Categoria
            state={state}
            dispatch={dispatch}
            handleRender={handleRender}
          />
          <Libro
            state={state}
            dispatch={dispatch}
            handleRender={handleRender}
          />
          <Persona
            state={state}
            dispatch={dispatch}
            handleRender={handleRender}
          />
        </div>
      </div>
    </>
  );
}

export default App;
