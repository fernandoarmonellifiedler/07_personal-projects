import React, { useState } from 'react';

// COMPONENTE MODAL PARA EDITAR
const CategoriaEdit = (props) => {
  const [nombre, setNombre] = useState('');
  console.log(props.dispatch);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const listaCategorias = props.state.categorias;
      if (nombre) {
        // check si categoria existe
        if (
          listaCategorias.find(
            (unaCategoria) =>
              unaCategoria.nombre_categoria == nombre.toUpperCase()
          )
        ) {
          return window.alert('Esa categoria ya existe!');
        }
        // edit categoria
        const editCategoria = {
          id: props.catId,
          nombre_categoria: nombre.toUpperCase(),
        };
        props.dispatch({ type: 'CATEGORIA_EDIT_ITEM', payload: editCategoria });
        setNombre('');
        props.handleModalEdit();
        props.handleRender();
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
          <h3 className='cat-edit-h3'>Editar categoría</h3>
          <button className='btn cat-edit-btn' onClick={props.handleEdit}>
            X
          </button>
        </header>
        <form className='form cat-modal-form' onSubmit={handleSubmit}>
          {/* Nombre de la categoria */}
          <div className='form-control'>
            <label htmlFor='categoria-nombre'>Nombre: </label>
            <input
              type='text'
              id='categoria-nombre'
              name='categoria-nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <button type='submit'>Editar Categoría</button>
        </form>
      </section>
    </>
  );
};

export default CategoriaEdit;
