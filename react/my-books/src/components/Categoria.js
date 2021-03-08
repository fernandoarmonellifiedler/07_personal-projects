import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import CategoriaLibrosModal from '../components/CategoriaLibrosModal.js';
import CategoriaEdit from '../components/CategoriaEdit';

// COMPONENTE PRINCIPAL
const Categoria = ({ categoria, setCategoria, fetchLists }) => {
  // librosEnCategoria: [],
  // // categoria modal
  // categoriaLibrosModal: false,
  // categoriaEditModal: false,

  const [nombre, setNombre] = useState('');
  const [inputId, setInputId] = useState('');
  // funcion para abrir/cerrar el modal
  const handleModalEdit = () => {
    setCategoriaState(!categoria.categoriaEditModal);
  };

  // funcion para abrir/cerrar el modal
  const handleModalVerMas = () => {
    setCategoriaState(!categoriaState.categoriaLibrosModal);
  };

  // ADD nueva categoria
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (nombre) {
        if (
          categoriaState.categorias !== undefined &&
          categoriaState.categorias.find(
            (unaCategoria) =>
              unaCategoria.nombre_categoria == nombre.toUpperCase()
          )
        ) {
          return window.alert('Esa categoria ya existe!');
        }

        const addCategoria = {
          id: nanoid(),
          nombre_categoria: nombre.toUpperCase(),
        };
        console.log({ ...categoriaState, addCategoria });
        setCategoriaState({ ...categoriaState, addCategoria });
        // props.dispatch({ type: 'CATEGORIA_ADD_ITEM', payload: addCategoria });
        setNombre('');
        // props.handleRender();
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
      // const response = props.state.libros;
      // if (response.find((unLibro) => unLibro.categoria_id == e.target.value)) {
      //   return window.alert('Esa categoria aun tiene libros asociados!');
      // }

      const categoriaId = e.target.value;
      const nuevaCategoria = categoria.filter(unaCategoria => unaCategoria.id === categoriaId
      )
      setCategoria(nuevaCategoria)
      // props.dispatch({ type: 'CATEGORIA_REMOVE_ITEM', payload: categoriaId });
      setInputId('');
      // props.handleRender();
    } catch (e) {
      console.log(e);
    }
  };
  // PUT categoria
  const handleEdit = (e) => {
    setInputId('');
    const categoriaId = e.target.value;
    if (categoriaId) {
      handleModalEdit();
      setInputId(categoriaId);
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
        // const response = props.state.libros;
        // props.dispatch({ type: 'FETCH_BOOK_LIST', payload: response });
        // props.dispatch({
        //   type: 'FETCH_BOOKS_ON_CATEGORY',
        //   payload: categoriaId,
        // });
        setInputId('');
      } catch (e) {
        console.log(e);
      }
    } else {
      handleModalVerMas();
    }
  };

  if (categoria.length === 0) {
    return (
      <main>
        <div>
          <h2>No hay categorias</h2>
          <button onClick={fetchLists}>refresh</button>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Modal para ver libros en categoria */}
      {/* {props.state.categoriaLibrosModal && (
        <CategoriaLibrosModal
          state={props.state}
          handleVerMas={handleVerMas}
          dispatch={props.dispatch}
        />
      )}
      {/* Modal para editar categoria */}
      {/* {props.state.categoriaEditModal && (
        <CategoriaEdit
          catId={inputId}
          handleEdit={handleEdit}
          handleRender={props.handleRender}
          handleModalEdit={handleModalEdit}
          state={props.state}
          dispatch={props.dispatch}
        />
      )} */}
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
        {categoriaState.categorias &&
          categoriaState.categorias.map((unaCategoria) => {
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
