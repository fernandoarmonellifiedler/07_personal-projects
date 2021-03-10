import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import LibroEdit from './LibroEdit';
import LibroPrestar from './LibroPrestar';

const Libros = ({ libros, setLibros, categorias, personas }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState('');
  const [persona, setPersona] = useState('');
  // modal
  const [editModal, setEditModal] = useState(false);
  const [prestarModal, setPrestarModal] = useState(false);
  // libro selected (edit, prestar)
  const [libroId, setLibroId] = useState('');

  // ADD nuevo libro
  const handleSubmit = async (e) => {
    e.preventDefault();

    // check datos obligatorios
    if (nombre && descripcion && categoria) {
      // check si existe la persona
      const personaFind = personas.filter(
        (unaPersona) => unaPersona.id == persona
      );
      if (personaFind.length == 0 && persona != '') {
        return window.alert('Esa persona no existe');
      }

      // check si existe la categoria
      const categoriaFind = categorias.filter(
        (unaCategoria) => unaCategoria.id == categoria
      );
      if (categoriaFind.length == 0) {
        return window.alert('Esa categoria no existe');
      }

      // check que el nombre no exista
      const libroFind = libros.filter(
        (unLibro) => unLibro.nombre_libro == nombre.toUpperCase()
      );
      if (libroFind.length != 0) {
        return window.alert('Esa libro ya existe');
      }

      // Add libro
      const newLibro = {
        id: nanoid(),
        nombre_libro: nombre.toUpperCase(),
        descripcion: descripcion.toUpperCase(),
        categoria_id: categoria,
        persona_id: persona || null,
      };
      setLibros([...libros, newLibro]);
      setNombre('');
      setDescripcion('');
      setCategoria('');
      setPersona('');
    } else {
      return window.alert('No puedes ingresar valores en blanco');
    }
  };

  const handleRemove = (e) => {
    const libroId = e.target.value;

    // check si esta prestado
    const libroSelected = libros.find((unLibro) => unLibro.id === libroId);
    if (
      personas.find((unaPersona) => unaPersona.id == libroSelected.persona_id)
    ) {
      return window.alert('Ese libro está prestado!');
    }

    const newLibros = libros.filter((unLibro) => unLibro.id !== libroId);
    setLibros(newLibros);
  };

  const handleEdit = (e) => {
    const libroId = e.target.value;
    setLibroId(libroId);
    setEditModal(!editModal);
  };

  const handlePrestar = (e) => {
    const libroId = e.target.value;
    setLibroId(libroId);
    setPrestarModal(!prestarModal);
  };

  const handleDevolver = (e) => {
    const libroId = e.target.value;
    const libroSelected = libros.find((unLibro) => unLibro.id == libroId);

    const devolverLibro = {
      id: libroId,
      nombre_libro: libroSelected.nombre_libro,
      descripcion: libroSelected.descripcion,
      categoria_id: libroSelected.categoria_id,
      persona_id: null,
    };

    const newLibros = libros.map((unLibro) =>
      unLibro.id === libroId ? devolverLibro : unLibro
    );

    setLibros(newLibros);
  };

  return (
    <section className='section'>
      <h2>Libros</h2>

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

      {editModal && (
        <LibroEdit
          libros={libros}
          setLibros={setLibros}
          editModal={editModal}
          setEditModal={setEditModal}
          id={libroId}
        />
      )}
      {prestarModal && (
        <LibroPrestar
          libros={libros}
          setLibros={setLibros}
          personas={personas}
          prestarModal={prestarModal}
          setPrestarModal={setPrestarModal}
          id={libroId}
        />
      )}

      {libros.length !== 0 ? (
        libros.map((unLibro) => {
          const {
            id,
            nombre_libro,
            descripcion,
            categoria_id,
            persona_id,
          } = unLibro;

          const categoriaEnUso = categorias.filter(
            (unaCategoria) => categoria_id == unaCategoria.id
          );

          const NombrePersona = personas.filter(
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
                <button className='btn' onClick={handleRemove} value={id}>
                  Eliminar
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h3>no hay libros registrados...</h3>
        </div>
      )}
    </section>
  );
};

export default Libros;
