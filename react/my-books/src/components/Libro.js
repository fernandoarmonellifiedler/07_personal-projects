import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import LibroEdit from '../components/LibroEdit';
import LibroPrestar from '../components/LibroPrestar';

// COMPONENTE PRINCIPAL
const Libro = (props) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [persona, setPersona] = useState('');
  const [editId, setEditId] = useState('');
  const [prestarId, setPrestarId] = useState('');

  // funcion para abrir/cerrar el modal
  const handleModalEdit = () => {
    props.dispatch({
      type: 'SWITCH_BOOK_EDIT_MODAL',
      payload: props.state.libroEditModal,
    });
  };

  // funcion para abrir/cerrar el modal
  const handleModalPrestar = () => {
    props.dispatch({
      type: 'SWITCH_BOOK_PRESTAR_MODAL',
      payload: props.state.libroPrestarModal,
    });
  };

  // ADD nuevo libro
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // valida que se ingresen los datos obligatorios
      if (nombre && descripcion && categoria) {
        // check si persona existe
        if (persona) {
          const findPersona = props.state.personas.filter(
            (unaPersona) => unaPersona.id == persona
          );
          if (findPersona.length == 0 && persona != '') {
            return window.alert('Esa persona no existe');
          }
        }
        // check si libro existe
        const findLibro = props.state.libros.filter(
          (unLibro) => unLibro.nombre_libro == nombre.toUpperCase()
        );
        if (findLibro.length != 0) {
          return window.alert('Esa libro ya existe');
        }

        // crea nuevo libro
        const nuevoLibro = {
          id: nanoid(),
          nombre_libro: nombre.toUpperCase(),
          descripcion: descripcion.toUpperCase(),
          categoria_id: categoria,
          persona_id: persona || null,
        };
        // POST a la bd
        props.dispatch({ type: 'BOOK_ADD_ITEM', payload: nuevoLibro });
        setNombre('');
        setDescripcion('');
        setCategoria('');
        setPersona('');
        props.handleRender();
      } else {
        return window.alert('Nombre, descripción y categoria ID son datos obligatorios');
      }
    } catch (e) {
      console.log(e);
    }
  };

  // DELETE libro
  const handleDelete = async (e) => {
    const libroId = e.target.value;
    try {
      const unLibro = props.state.libros.find(
        (unLibro) => unLibro.id == libroId
      );
      const result = props.state.personas.find(
        (unaPersona) => unaPersona.id == unLibro.persona_id
      );
      if (result) {
        return window.alert('Debes devolver el libro para poder borrarlo');
      }
      props.dispatch({ type: 'BOOK_REMOVE_ITEM', payload: libroId });
      props.handleRender();
    } catch (e) {
      console.log(e);
    }
  };

  // PUT libro
  const handleEdit = (e) => {
    setEditId('');
    const libroId = e.target.value;
    if (libroId) {
      setEditId(libroId);
      handleModalEdit();
    } else {
      handleModalEdit();
    }
  };

  // PUT libro prestar
  const handlePrestar = (e) => {
    setPrestarId('');
    const libroId = e.target.value;
    if (libroId) {
      setPrestarId(libroId);
      handleModalPrestar();
    } else {
      handleModalPrestar();
    }
  };

  // PUT libro devolver
  const handleDevolver = (e) => {
    const libroId = e.target.value;
    const libroSelected = props.state.libros.find(
      (unLibro) => unLibro.id == libroId
    );

    const devolverLibro = {
      nombre_libro: libroSelected.nombre_libro,
      descripcion: libroSelected.descripcion,
      categoria_id: libroSelected.categoria_id,
      persona_id: null,
    };
    try {
      props.dispatch({ type: 'BOOK_REMOVE_ITEM', payload: libroId });
      props.dispatch({ type: 'BOOK_DEVOLVER_ITEM', payload: devolverLibro });
      props.handleRender();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* Modal para editar libro */}
      {props.libroState.libroEditModal && (
        <LibroEdit
          libroEditId={editId}
          handleEdit={handleEdit}
          listaLibros={props.state.libros}
          handleRender={props.handleRender}
          handleModalEdit={handleModalEdit}
          dispatch={props.dispatch}
        />
      )}
      {/* Modal para prestar libro */}
      {props.libroState.libroPrestarModal && (
        <LibroPrestar
          libroPrestarId={prestarId}
          handlePrestar={handlePrestar}
          listaLibros={props.state.libros}
          handleRender={props.handleRender}
          handleModalPrestar={handleModalPrestar}
          listaPersonas={props.state.personas}
          dispatch={props.dispatch}
        />
      )}

      <section className='section'>
        <header>
          <h2>Agregar nuevo libro</h2>
        </header>
        {/* Formulario */}
        <form className='form' onSubmit={handleSubmit}>
          {/* Nombre del Libro */}
          <div className='form-control'>
            <label htmlFor='libro-nombre'>Nombre: </label>
            <input
              type='text'
              id='libro-nombre'
              name='libro-nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          {/* Descripcion */}
          <div className='form-control'>
            <label htmlFor='libro-descripcion'>Descripción: </label>
            <input
              type='text'
              id='libro-descripcion'
              name='libro-descripcion'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          {/* Categoria */}
          <div className='form-control'>
            <label htmlFor='libro-categoria'>Categoria ID: </label>
            <input
              type='text'
              id='libro-categoria'
              name='libro-categoria'
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
          {/* Persona */}
          <div className='form-control'>
            <label htmlFor='libro-persona'>Prestar a: </label>
            <input
              type='text'
              id='libro-persona'
              name='libro-persona'
              value={persona}
              onChange={(e) => setPersona(e.target.value)}
            />
          </div>
          <button type='submit'>Agregar Libro</button>
        </form>
        {/* iterando la lista de libros de la bd */}
        <h3>Listado de libros</h3>
        {props.libroState.libros &&
          props.libroState.libros.map((unLibro) => {
            const {
              id,
              nombre_libro,
              descripcion,
              categoria_id,
              persona_id,
            } = unLibro;
            const categoriaEnUso = props.state.categorias.filter(
              (unaCategoria) => categoria_id == unaCategoria.id
            );

            const NombrePersona = props.state.personas.filter(
              (unaPersona) => persona_id == unaPersona.id
            );

            return (
              <div className='item' key={id}>
                <div className='item-datos'>
                  <p>Titulo: {nombre_libro || 'sin libro'}</p>
                  <p>Descripción: {descripcion || 'sin descripcion'}</p>
                  <p>
                    {categoriaEnUso.length !== 0
                      ? 'Categoria: ' +
                        categoriaEnUso.map(
                          (unaCategoria) => unaCategoria.nombre_categoria
                        )
                      : 'sin categoria'}
                  </p>
                  <p>
                    {NombrePersona.length !== 0
                      ? 'Prestado a: ' +
                        NombrePersona.map((unaPersona) => unaPersona.alias)
                      : 'Libro disponible'}

                    {persona_id != null && (
                      <button
                        value={id}
                        onClick={handleDevolver}
                        className='btn item-button-devolver'
                      >
                        devolver libro
                      </button>
                    )}
                  </p>
                </div>
                <div className='item-botones'>
                  <button className='btn' onClick={handleEdit} value={id}>
                    Editar
                  </button>
                  <button className='btn' onClick={handlePrestar} value={id}>
                    prestar
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

export default Libro;
