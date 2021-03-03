import React, { useState } from 'react';

// COMPONENTE MODAL PARA EDITAR
const LibroEdit = (props) => {
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (descripcion) {
        const libroSelected = props.listaLibros.find(
          (unLibro) => unLibro.id == props.libroEditId
        );
        const editLibro = {
          nombre_libro: libroSelected.nombre_libro,
          descripcion: descripcion,
          categoria_id: libroSelected.categoria_id,
          persona_id: libroSelected.persona_id,
        };

        props.dispatch({ type: 'BOOK_EDIT_ITEM', payload: editLibro });
        setDescripcion('');
        props.handleRender();
        props.handleModalEdit();
      } else {
        window.alert('No puedes ingresar valores en blanco');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <section className='cat-modal'>
        <header>
          <h3 className='cat-edit-h3'>Editar libro</h3>
          <button className='btn cat-edit-btn' onClick={props.handleEdit}>
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
