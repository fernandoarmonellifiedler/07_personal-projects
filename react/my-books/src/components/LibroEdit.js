import React, { useState } from 'react';

const LibroEdit = ({ libros, setLibros, editModal, setEditModal, id }) => {
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (descripcion) {
      // edit libro
      const libroSelected = libros.find((unLibro) => unLibro.id == id);
      
      const editLibro = {
        id: libroSelected.id,
        nombre_libro: libroSelected.nombre_libro,
        descripcion: descripcion.toUpperCase(),
        categoria_id: libroSelected.categoria_id,
        persona_id: libroSelected.persona_id,
      };

      const newLibros = libros.map((unLibro) =>
        unLibro.id === id ? editLibro : unLibro
      );

      setLibros(newLibros);
      setDescripcion('');
      setEditModal(!editModal);
    } else {
      window.alert('No puedes ingresar valores en blanco');
    }
  };

  return (
    <>
      <section className='cat-modal'>
        <header>
          <h3 className='cat-edit-h3'>Editar libro</h3>
          <button
            className='btn cat-edit-btn'
            onClick={() => setEditModal(!editModal)}
          >
            X
          </button>
        </header>
        <form className='form cat-modal-form' onSubmit={handleSubmit}>
          <p>Solo puedes editar su descripción</p>
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
          <button type='submit'>Editar Libro</button>
        </form>
      </section>
    </>
  );
};

export default LibroEdit;
