import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import CategoriaLibrosModal from '../components/CategoriaLibrosModal.js';
import CategoriaEdit from '../components/CategoriaEdit';

// COMPONENTE PRINCIPAL
const Categoria = (props) => {
  const [nombre, setNombre] = useState('');
  const [id, setId] = useState('');

  // funcion para re-renderizar componentes
  const handleRender = () => {
    try {
      const response = props.state.categorias;
      if (!response|| response.length == 0) return;
      props.dispatch({ type: 'FETCH_CATEGORIA_LIST', payload: response });
    } catch (e) {
      console.log(e);
    }
  };

  // funcion para abrir/cerrar el modal
  const handleModalEdit = () => {
    props.dispatch({
      type: 'SWITCH_CATEGORIA_EDIT_MODAL',
      payload: props.state.categoriaEditModal,
    });
    
  };

  // funcion para abrir/cerrar el modal
  const handleModalVerMas = () => {
    props.dispatch({
      type: 'SWITCH_CATEGORIA_MODAL',
      payload: props.state.categoriaLibrosModal,
    });
  };

  // ADD nueva categoria
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        props.state.categorias.find(
          (unaCategoria) =>
            unaCategoria.nombre_categoria == nombre.toUpperCase()
        )
      ) {
        return window.alert('Esa categoria ya existe!');
      }
      if (nombre) {
        const addCategoria = {
          id: nanoid(),
          nombre_categoria: nombre.toUpperCase(),
        };

        props.dispatch({ type: 'CATEGORIA_ADD_ITEM', payload: addCategoria });
        setNombre('');
        handleRender();
      } else {
        window.alert('No puedes ingresar valores en blanco');
      }
    } catch (e) {
      console.log(e);
    }
  };
  // DELETE categoria
  const handleDelete = (e) => {
    try {
      const response = props.state.libros;
      if (
        response.find((unLibro) => unLibro.categoria_id == e.target.value)
      ) {
        return window.alert('Esa categoria aun tiene libros asociados!');
      }
    } catch (e) {
      console.log(e);
    }
    try {
      const categoriaId = e.target.value;
      props.dispatch({ type: 'CATEGORIA_REMOVE_ITEM', payload: categoriaId });
      setId('')
      handleRender();
    } catch (e) {
      console.log(e);
    }
  };
  // PUT categoria
  const handleEdit = (e) => {
    setId('');
    const categoriaId = e.target.value;
    if (categoriaId) {
      handleModalEdit();
      setId(categoriaId);
    } else {
      handleModalEdit();
    }
  };
  // Modal para ver libros en categoria
  const handleVerMas = (e) => {
    const categoriaId = e.target.value;
    if (categoriaId) {
      handleModalVerMas();
      try {
        const response = props.state.libros;
        props.dispatch({ type: 'FETCH_BOOK_LIST', payload: response });
        props.dispatch({
          type: 'FETCH_BOOKS_ON_CATEGORY',
          payload: categoriaId,
        });
        setId('')
      } catch (e) {
        console.log(e);
      }
    } else {
      handleModalVerMas();
    }
  };

  return (
    <>
      {/* Modal para ver libros en categoria */}
      {props.state.categoriaLibrosModal && (
        <CategoriaLibrosModal
          state={props.state}
          handleVerMas={handleVerMas}
          dispatch={props.dispatch}
        />
      )}
      {/* Modal para editar categoria */}
      {props.state.categoriaEditModal && (
        <CategoriaEdit
          catId={id}
          handleEdit={handleEdit}
          handleRender={handleRender}
          handleModalEdit={handleModalEdit}
          state={props.state}
          dispatch={props.dispatch}
        />
      )}
      <section className='section'>
        <header>
          <h2>Agregar categoría</h2>
        </header>
        {/* Formulario */}
        <form className='form' onSubmit={handleSubmit}>
          {/* Nombre de la categoria */}
          <div className='form-control categoria-form'>
            <label htmlFor='categoria-nombre'>Nombre: </label>
            <input
              type='text'
              id='categoria-nombre'
              name='categoria-nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <button type='submit'>Agregar Categoría</button>
        </form>

        {/* iterando sobre la lista de categorias de la bd */}
        <h3>Listado de categorías</h3>
        {props.state.categorias.map((unaCategoria) => {
          const { id, nombre_categoria } = unaCategoria;
          return (
            <div className='item' key={id}>
              <div className='item-datos'>
                <h5 className='title-categoria'>
                  {nombre_categoria || 'sin categoria'}
                </h5>
                <p>Categoria Id: {id}</p>
                <button onClick={handleVerMas} value={id}>
                  Ver Libros
                </button>
              </div>
              <div className='item-botones'>
                <button className='btn' onClick={handleEdit} value={id}>
                  Editar
                </button>
                <button className='btn' onClick={handleDelete} value={id}>
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Categoria;
